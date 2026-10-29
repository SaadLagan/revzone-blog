/* ============================================================
   RevZone – blog.js  (Blog listing page with filter & search)
   ============================================================ */

// ---------- Shared helpers (duplicated here since main.js may not load) ----------
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

// ---------- State ----------
let currentCat = 'all';
let currentPage = 1;
const POSTS_PER_PAGE = 9;

// ---------- Elements ----------
const blogGrid   = document.getElementById('blogGrid');
const noResults  = document.getElementById('noResults');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// ---------- Read URL param for pre-selected category ----------
const urlCat = new URLSearchParams(window.location.search).get('cat');
if (urlCat) {
  currentCat = urlCat;
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === urlCat);
  });
}

// ---------- Create post card ----------
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

// ---------- Observe cards ----------
function observeCards() {
  const cards = document.querySelectorAll('.post-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 55}ms`;
    obs.observe(card);
  });
}

// ---------- Filter & search ----------
function getFiltered() {
  const q = (searchInput ? searchInput.value.toLowerCase() : '');
  return POSTS.filter(p => {
    const catOk = currentCat === 'all' || p.category === currentCat;
    const searchOk = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return catOk && searchOk;
  });
}

// ---------- Render ----------
function render() {
  blogGrid.innerHTML = '';
  pagination.innerHTML = '';

  const filtered = getFiltered();
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const slice = filtered.slice(start, start + POSTS_PER_PAGE);

  noResults.classList.toggle('hidden', slice.length > 0);

  slice.forEach(post => blogGrid.appendChild(createPostCard(post)));
  setTimeout(observeCards, 50);

  // Pagination
  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
      btn.textContent = i;
      btn.addEventListener('click', () => {
        currentPage = i;
        render();
        window.scrollTo({ top: 300, behavior: 'smooth' });
      });
      pagination.appendChild(btn);
    }
  }
}

// ---------- Filter click ----------
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    currentPage = 1;
    render();
  });
});

// ---------- Search ----------
if (searchInput) {
  searchInput.addEventListener('input', () => {
    currentPage = 1;
    render();
  });
}

// ---------- Init ----------
render();
