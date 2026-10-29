/* ============================================================
   RevZone – main.js  (shared across all pages)
   ============================================================ */

// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---------- Hamburger menu ----------
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ---------- Stats counter animation (index page only) ----------
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  });
}

// Trigger counter when stats bar enters viewport
const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(statsBar);
}

// ---------- Card entrance animation (IntersectionObserver) ----------
function observeCards() {
  const cards = document.querySelectorAll('.post-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 60}ms`;
    obs.observe(card);
  });
}

// ---------- Create a post card HTML ----------
function createPostCard(post) {
  const card = document.createElement('div');
  card.className = 'post-card';
  card.innerHTML = `
    <div class="post-card-img-placeholder">
      <span style="font-size:3.5rem">${post.emoji}</span>
      <span>${post.category.toUpperCase()}</span>
    </div>
    <div class="post-card-body">
      <div class="post-meta">
        <span class="post-cat">${post.category}</span>
        <span class="post-date"><i class="fas fa-calendar-alt"></i> ${post.date}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="post-card-footer">
        <span class="post-author"><i class="fas fa-user"></i> ${post.author}</span>
        <span class="post-read-time"><i class="fas fa-clock"></i> ${post.readTime}</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => {
    window.location.href = `post.html?id=${post.id}`;
  });
  return card;
}

// ---------- Newsletter form ----------
const nlForm = document.getElementById('nlForm');
const nlNote = document.getElementById('nlNote');
if (nlForm) {
  nlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = nlForm.querySelector('input[type=email]').value;
    nlNote.textContent = `✅ Thanks! ${email} has been subscribed. Welcome to the fast lane!`;
    nlForm.querySelector('input[type=email]').value = '';
  });
}

// ---------- Render featured posts (index page) ----------
const featuredGrid = document.getElementById('featuredGrid');
if (featuredGrid && typeof POSTS !== 'undefined') {
  const featured = POSTS.filter(p => p.featured);
  featured.forEach(post => featuredGrid.appendChild(createPostCard(post)));
  setTimeout(observeCards, 100);
}
