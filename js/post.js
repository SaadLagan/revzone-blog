/* ============================================================
   RevZone – post.js  (Single article page)
   ============================================================ */

// Navbar scroll
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
if (hamburger && navLinksEl) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
  });
}

// ---------- Get post ID from URL ----------
const params = new URLSearchParams(window.location.search);
const postId = parseInt(params.get('id'));
const post   = POSTS.find(p => p.id === postId);

const articlePage = document.getElementById('articlePage');

if (!post || !articlePage) {
  if (articlePage) {
    articlePage.innerHTML = `
      <div style="text-align:center;padding:8rem 1rem;">
        <i class="fas fa-car-crash" style="font-size:4rem;color:var(--red);margin-bottom:1rem;display:block;"></i>
        <h1 style="font-family:var(--ff-head)">Article Not Found</h1>
        <p style="color:var(--text2);margin:1rem 0;">This article doesn't exist or may have been removed.</p>
        <a href="blog.html" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:.5rem;padding:.72rem 1.6rem;border-radius:50px;background:var(--red);color:#fff;font-weight:600;">
          Back to Blog <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
  }
} else {
  // Update page title
  document.title = `${post.title} – RevZone`;

  // Build article HTML
  articlePage.innerHTML = `
    <header class="article-header">
      <div class="post-meta">
        <span class="post-cat">${post.category}</span>
        <span class="post-date"><i class="fas fa-calendar-alt"></i> ${post.date}</span>
        <span class="post-read-time"><i class="fas fa-clock"></i> ${post.readTime}</span>
      </div>
      <h1>${post.title}</h1>
      <p style="color:var(--text2);font-size:1.1rem;line-height:1.7;margin-bottom:1.2rem;">${post.excerpt}</p>
      <div class="article-author-bar">
        <div class="author-avatar"><i class="fas fa-user"></i></div>
        <div class="author-info">
          <strong>${post.author}</strong>
          <span>${post.date} · ${post.readTime}</span>
        </div>
      </div>
    </header>

    <div class="article-hero-img">
      <span style="font-size:6rem">${post.emoji}</span>
    </div>

    <div class="article-body">
      ${post.content}
    </div>

    <div class="share-bar">
      <span>Share this article:</span>
      <button class="share-btn" onclick="copyLink()">
        <i class="fas fa-link"></i> Copy Link
      </button>
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}" target="_blank" class="share-btn">
        <i class="fab fa-x-twitter"></i> X / Twitter
      </a>
    </div>
  `;

  // ---------- Related Posts ----------
  const related = POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);
  const relatedSection = document.getElementById('relatedSection');
  const relatedGrid    = document.getElementById('relatedGrid');

  if (related.length > 0 && relatedSection && relatedGrid) {
    relatedSection.style.display = '';
    related.forEach(rp => {
      const card = document.createElement('div');
      card.className = 'post-card';
      card.innerHTML = `
        <div class="post-card-img-placeholder">
          <span style="font-size:3.5rem">${rp.emoji}</span>
          <span>${rp.category.toUpperCase()}</span>
        </div>
        <div class="post-card-body">
          <div class="post-meta">
            <span class="post-cat">${rp.category}</span>
            <span class="post-date"><i class="fas fa-calendar-alt"></i> ${rp.date}</span>
          </div>
          <h3>${rp.title}</h3>
          <p>${rp.excerpt}</p>
          <div class="post-card-footer">
            <span class="post-author"><i class="fas fa-user"></i> ${rp.author}</span>
            <span class="post-read-time"><i class="fas fa-clock"></i> ${rp.readTime}</span>
          </div>
        </div>
      `;
      card.addEventListener('click', () => {
        window.location.href = `post.html?id=${rp.id}`;
      });
      relatedGrid.appendChild(card);
    });

    // Animate related cards
    setTimeout(() => {
      relatedGrid.querySelectorAll('.post-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 70}ms`;
        setTimeout(() => card.classList.add('visible'), 100 + i * 70);
      });
    }, 200);
  }
}

// ---------- Copy link helper ----------
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.querySelector('.share-btn');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    }
  });
}
