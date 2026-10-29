# RevZone – Car Fan Blog 🚗🏎️

![RevZone Banner](https://img.shields.io/badge/RevZone-Car%20Fan%20Blog-e8252e?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xOC45MiA2LjAxQzE4LjcyIDUuNDIgMTguMTYgNSAxNy41IDVoLTExYy0uNjYgMC0xLjIxLjQyLTEuNDMgMS4wMUw0IDExdjhwMCAxLjEuOSAyIDIgMmgxYzEuMSAwIDItLjkgMi0ydi0xaDZWMTljMCAxLjEuOSAyIDIgMmgxYzEuMSAwIDItLjkgMi0ydi04bC0yLjA4LTQuOTl6TTYuNSAxNUMwNS42NyAxNSA1IDE0LjMzIDUgMTMuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em0xMSAwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpNNSAxMWwyLTUuNWgxMEwxOSAxMUg1eiIvPjwvc3ZnPg==)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

A fully responsive, dark-themed automotive blogging website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no dependencies — just clean, fast code for car fans.

---

## 🌐 Live Demo

> **GitHub Pages:** [https://SaadLagan.github.io/revzone-blog](https://SaadLagan.github.io/revzone-blog)

---

## ✨ Features

- 🎨 **Dark, racing-themed design** with red accent colours and speed-line grid backgrounds
- 📱 **Fully responsive** — mobile-first, works on all screen sizes
- 📝 **12 sample articles** covering reviews, news, builds, EV, classics, and lifestyle
- 🔍 **Live search** across all posts
- 🏷️ **Category filtering** (Reviews, News, Builds, EV, Classics, Lifestyle)
- 📄 **Pagination** with 9 posts per page
- ⭐ **Full article pages** with ratings, spec tables, and related posts
- 📊 **Animated stats counter** on homepage
- 📬 **Newsletter subscribe form** with feedback
- 📮 **Contact form** with validation
- 🌊 **Scroll-triggered card animations** using IntersectionObserver
- 🍔 **Hamburger menu** for mobile navigation
- 🔗 **Copy link / share** on article pages

---

## 📁 File Structure

```
revzone-blog/
├── index.html          # Homepage with hero, stats, featured posts
├── blog.html           # Full blog listing with filters & search
├── post.html           # Single article page (dynamic, URL-param driven)
├── about.html          # About page with team & values
├── contact.html        # Contact page with form
├── css/
│   └── style.css       # All styles (dark theme, responsive, animations)
├── js/
│   ├── data.js         # All blog post content (acts as DB)
│   ├── main.js         # Shared JS (navbar, counters, hero posts)
│   ├── blog.js         # Blog page (filter, search, pagination)
│   ├── post.js         # Article page (render post, related posts)
│   └── contact.js      # Contact form handler
└── README.md
```

---

## 🚀 Getting Started

### Option 1: Open Directly
Just clone the repo and open `index.html` in your browser — no server or build step needed.

```bash
git clone https://github.com/SaadLagan/revzone-blog.git
cd revzone-blog
open index.html   # macOS
# or just double-click index.html in your file explorer
```

### Option 2: Local Server (recommended for best experience)
```bash
# Using Python
python3 -m http.server 5500

# Using Node.js
npx serve .
```
Then visit `http://localhost:5500`

---

## 📸 Pages Overview

| Page | Description |
|------|-------------|
| `index.html` | Hero section, animated stats, featured articles, categories, newsletter |
| `blog.html` | All 12 posts with category filters, live search, pagination |
| `post.html?id=1` | Single article with ratings, spec tables, related posts |
| `about.html` | Brand story, team, values |
| `contact.html` | Contact form with validation |

---

## 🎨 Design Decisions

- **No frameworks**: Pure HTML/CSS/JS for maximum learning value and zero dependencies
- **CSS Variables**: Full theming via `:root` variables for easy customisation
- **IntersectionObserver**: Used for performant scroll animations
- **Mock data pattern**: All content lives in `data.js` — easy to extend or replace with a real API

---

## 👤 Author

**Saad Lagan**
- GitHub: [@SaadLagan](https://github.com/SaadLagan)
- Email: [lagansaad@gmail.com](mailto:lagansaad@gmail.com)

---

## 📄 License

MIT — free to use, modify, and share.
