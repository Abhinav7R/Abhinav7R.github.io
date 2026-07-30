const siteData = window.siteData;

const pageTitles = {
    home: 'Home',
    research: 'Publications',
    projects: 'Projects',
    experience: 'Experience',
    gallery: 'Gallery',
    cv: 'CV'
};

const iconMap = {
    'fa-graduation-cap': 'fa-solid fa-graduation-cap',
    'fa-envelope': 'fa-solid fa-envelope',
    'fa-github': 'fa-brands fa-github',
    'fa-linkedin-in': 'fa-brands fa-linkedin-in',
    'fa-diagram-project': 'fa-solid fa-diagram-project'
};

const state = {
    data: null,
    currentTheme: document.documentElement.dataset.theme || 'light',
    galleryFilter: 'All'
};

const app = document.getElementById('app');

function escapeHTML(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function titleCase(value) {
    return value.replace(/\b\w/g, (character) => character.toUpperCase());
}

function renderIcon(icon) {
    return `<i class="${iconMap[icon] || icon}"></i>`;
}

function placeholderSvg(title, subtitle, accent) {
    const color = accent && !String(accent).startsWith('linear-gradient') ? accent : '#8db6ef';
    const safeTitle = escapeHTML(title);
    const safeSubtitle = subtitle ? escapeHTML(subtitle) : '';
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${safeTitle}">
            <defs>
                <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stop-color="${color}" />
                    <stop offset="100%" stop-color="#0f172a" stop-opacity="0.96" />
                </linearGradient>
                <radialGradient id="glow" cx="30%" cy="25%" r="80%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                </radialGradient>
            </defs>
            <rect width="1200" height="800" fill="url(#bg)" />
            <rect width="1200" height="800" fill="url(#glow)" />
            <circle cx="980" cy="140" r="170" fill="#ffffff" fill-opacity="0.06" />
            <circle cx="180" cy="650" r="220" fill="#ffffff" fill-opacity="0.04" />
            <text x="72" y="680" fill="#ffffff" font-family="Manrope, Arial, sans-serif" font-size="70" font-weight="700">${safeTitle}</text>
            <text x="72" y="735" fill="#e2e8f0" font-family="Manrope, Arial, sans-serif" font-size="28">${safeSubtitle}</text>
        </svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createSectionHeader(title, note = '') {
    return `
        <div class="section-header" data-reveal>
            <div>
                <h2 class="section-title">${escapeHTML(title)}</h2>
            </div>
        </div>
    `;
}

function renderHeader(data, activePage) {
    const navItems = data.site.navigation;

    const nav = navItems.map((item) => `
        <a href="${item.href}" ${item.page === activePage ? 'aria-current="page"' : ''} ${item.page === 'home' ? 'aria-label="Home"' : ''}>
            ${item.page === 'home' ? '<i class="fa-solid fa-house"></i>' : escapeHTML(item.label)}
        </a>
    `).join('');

    return `
        <header class="site-header" data-reveal>
            <a class="brand" href="index.html" aria-label="${escapeHTML(data.site.name)} home">${escapeHTML(data.site.name)}</a>
            
            <button class="mobile-menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" id="mobile-menu-toggle">
                <i class="fa-solid fa-bars"></i>
            </button>

            <div class="site-tools" id="site-tools">
                <nav class="nav" aria-label="Primary navigation">
                    ${nav}
                </nav>
                <button class="theme-toggle" type="button" id="theme-toggle" aria-label="Toggle color theme">
                    <i class="fa-solid fa-circle-half-stroke"></i>
                </button>
            </div>
        </header>
    `;
}

function renderFooter(data) {
    const lastUpdated = data.site.lastUpdated || '';
    return `
        <footer class="footer" data-reveal>
            <span>&copy; ${new Date().getFullYear()} ${escapeHTML(data.site.name)}.${lastUpdated ? ` Last updated: ${escapeHTML(lastUpdated)}` : ''}</span>
        </footer>
    `;
}

function renderSocialLinks(socials) {
    return `
        <div class="icon-links" aria-label="Social links">
            ${socials.map((social) => `
                <a href="${social.href}" target="_blank" rel="noreferrer" aria-label="${escapeHTML(social.label)}">
                    ${renderIcon(social.icon)}
                </a>
            `).join('')}
        </div>
    `;
}

function renderMediaBlock(item, type, kind) {
    const fallback = placeholderSvg(item.title, item.description || item.summary || item.caption || kind, item.accent || '#8db6ef');
    const alt = item.imageAlt || item.title;
    const src = item.thumbnail || item.image || fallback;

    return `
        <div class="media">
            <img
                data-media-image="${type}"
                src="${src}"
                alt="${escapeHTML(alt)}"
                loading="lazy"
                decoding="async"
                data-fallback-src="${fallback}"
                data-fallback-title="${escapeHTML(item.title)}"
                data-fallback-subtitle="${escapeHTML(item.description || item.summary || item.caption || kind)}"
                data-fallback-accent="${item.accent || '#8db6ef'}"
            >
        </div>
    `;
}

function renderHome(data) {
    return `
        <main class="page">
            <section class="hero home-hero" data-reveal>
                <div class="hero-copy">
                    <h1>${escapeHTML(data.site.name)}</h1>
                    <p class="hero-affiliation">${escapeHTML(data.site.affiliation)}</p>
                    ${Array.isArray(data.site.intro) 
                        ? data.site.intro.map(p => `<p class="lede">${p}</p>`).join('') 
                        : `<p class="lede">${escapeHTML(data.site.intro)}</p>`}
                </div>
                <div class="hero-side">
                    <figure class="portrait">
                        <img src="${data.site.profileImage}" alt="${escapeHTML(data.site.name)} portrait" loading="eager" decoding="async">
                    </figure>
                    ${renderSocialLinks(data.site.socials)}
                </div>
            </section>

            <section class="panel" data-reveal>
                ${createSectionHeader('News')}
                <div class="news-list">
                    ${data.news.map((item, index) => `
                        <article class="news-item" style="--reveal-index:${index};" data-reveal>
                            <div class="news-date">${escapeHTML(item.date)}</div>
                            <p>${escapeHTML(item.text)}</p>
                        </article>
                    `).join('')}
                </div>
            </section>
        </main>
    `;
}

function renderResearch(data) {
    return `
        <main class="page">
            <section class="panel" data-reveal>
                ${createSectionHeader('Publications')}
                <div class="publication-grid">
                    ${data.research.publications.map((paper, index) => `
                        <article class="publication-card" id="${escapeHTML(paper.id)}" style="--reveal-index:${index};" data-reveal>
                            ${renderMediaBlock(paper, 'publication', 'Publication teaser')}
                            <div class="pub-right">
                                <div class="card-copy">
                                    <h3>${escapeHTML(paper.title)}</h3>
                                    <p class="subtitle">${escapeHTML(paper.conference)}</p>
                                    ${paper.authors ? `<p class="publication-authors">${escapeHTML(paper.authors)}</p>` : ''}
                                    <p>${escapeHTML(paper.summary)}</p>
                                </div>
                                <div class="publication-links">
                                    <a class="btn-link" href="${paper.projectUrl}"><i class="fa-solid fa-arrow-up-right-from-square"></i>Project page</a>
                                    ${paper.codeUrl ? `<a class="btn-link" href="${paper.codeUrl}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i>Code</a>` : ''}
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>
        </main>
    `;
}

function renderProjects(data) {
    const VISIBLE_COUNT = 6;
    return `
        <main class="page">
            <section class="panel" data-reveal>
                ${createSectionHeader('Projects')}
                <div class="project-grid" id="project-grid">
                    ${data.projects.map((project, index) => `
                        <article class="project-card${index >= VISIBLE_COUNT ? ' is-hidden' : ''}" id="${escapeHTML(project.slug)}" style="--reveal-index:${index};" data-reveal>
                            ${renderMediaBlock(project, 'project', 'Project thumbnail')}
                            <div class="card-copy">
                                <h3>${escapeHTML(project.title)}</h3>
                                <p>${escapeHTML(project.description)}</p>
                            </div>
                            <div class="meta-row">${project.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join('')}</div>
                            <div class="project-links">
                                <a class="btn-link" href="${project.github}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i>Code</a>
                            </div>
                        </article>
                    `).join('')}
                </div>
                ${data.projects.length > VISIBLE_COUNT ? `
                    <button class="toggle-projects" type="button" id="toggle-projects" data-state="collapsed">
                        Show More <i class="fa-solid fa-chevron-down"></i>
                    </button>
                ` : ''}
            </section>
        </main>
    `;
}

function renderExperience(data) {
    const renderRoleCards = (items) => items.map((item, index) => `
        <article class="role-card" style="--reveal-index:${index};" data-reveal>
            ${item.logo ? `<img class="role-logo" src="${item.logo}" alt="${escapeHTML(item.title)} logo" loading="lazy">` : ''}
            <h3>${escapeHTML(item.title)}</h3>
            <p class="subtitle">${escapeHTML(item.role || '')}</p>
            ${item.period ? `<p class="meta">${escapeHTML(item.period)}</p>` : ''}
            <p class="role-copy">${escapeHTML(item.description)}</p>
        </article>
    `).join('');

    return `
        <main class="page experience-section">
            <section class="panel" data-reveal>
                ${createSectionHeader('Research')}
                <div class="experience-grid">
                    ${renderRoleCards(data.experience.research)}
                </div>
            </section>

            <section class="panel" data-reveal>
                ${createSectionHeader('Industry')}
                <div class="experience-grid">
                    ${renderRoleCards(data.experience.industry)}
                </div>
            </section>

            <section class="panel" data-reveal>
                ${createSectionHeader('Teaching')}
                <div class="cards-grid compact-grid">
                    ${data.experience.teaching.map((item, index) => `
                        <article class="mini-card" style="--reveal-index:${index};" data-reveal>
                            <h3>${escapeHTML(item.course)}</h3>
                            <p class="subtitle">${escapeHTML(item.professor)}</p>
                            <div class="meta-row"><span class="pill">${escapeHTML(item.semester)}</span></div>
                        </article>
                    `).join('')}
                </div>
            </section>

            <section class="panel" data-reveal>
                ${createSectionHeader('Leadership')}
                <div class="cards-grid compact-grid">
                    ${data.experience.leadership.map((item, index) => `
                        <article class="mini-card" style="--reveal-index:${index};" data-reveal>
                            <h3>${escapeHTML(item.title)}</h3>
                            <p class="role-copy">${escapeHTML(item.description)}</p>
                        </article>
                    `).join('')}
                </div>
            </section>

            <section class="panel" data-reveal>
                ${createSectionHeader('Achievements')}
                <div class="achievement-grid">
                    ${data.experience.achievements.map((item, index) => `
                        <article class="achievement-card" style="--reveal-index:${index};" data-reveal>
                            <h3>${escapeHTML(item.title)}</h3>
                            <p class="achievement-copy">${escapeHTML(item.description)}</p>
                        </article>
                    `).join('')}
                </div>
            </section>
        </main>
    `;
}

function renderGallery(data) {
    const renderImages = (images) => images.map((img, index) => `
        <div class="masonry-item" style="--reveal-index:${index};" data-reveal>
            <img src="${img.src}" loading="lazy" alt="Gallery image">
        </div>
    `).join('');

    const travelSections = (data.gallery.travel || []).map(folder => `
        <section class="panel" data-reveal>
            ${createSectionHeader(`Travel: ${escapeHTML(folder.title)}`)}
            <div class="masonry-grid">
                ${renderImages(folder.images || [])}
            </div>
        </section>
    `).join('');

    return `
        <main class="page">
            ${data.gallery.paintings && data.gallery.paintings.length > 0 ? `
            <section class="panel" data-reveal>
                ${createSectionHeader('Paintings')}
                <div class="masonry-grid">
                    ${renderImages(data.gallery.paintings)}
                </div>
            </section>
            ` : ''}
            
            ${travelSections}
        </main>
    `;
}

function renderCv(data) {
    const pdfUrl = data.cv.pdf;

    return `
        <main class="page">
            <section class="cv-panel" data-reveal>
                ${createSectionHeader('CV')}
                <div class="cv-embed" id="cv-embed">
                    <embed src="${pdfUrl}" type="application/pdf" width="100%" height="100%">
                </div>
            </section>
        </main>
    `;
}

function bindMediaFallbacks(scope = document) {
    scope.querySelectorAll('img[data-fallback-src]').forEach((image) => {
        image.addEventListener('error', () => {
            if (image.dataset.fallbackApplied === 'true') {
                return;
            }

            image.dataset.fallbackApplied = 'true';
            image.src = image.dataset.fallbackSrc;
        }, { once: true });
    });
}

function bindThemeToggle() {
    const toggle = document.getElementById('theme-toggle');

    if (!toggle) {
        return;
    }

    toggle.addEventListener('click', () => {
        state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = state.currentTheme;
        localStorage.setItem('site-theme', state.currentTheme);
    });
}

function initCvPage(data) {
    app.innerHTML = [
        `<div class="site-shell">${renderHeader(data, 'cv')}`,
        renderCv(data),
        renderFooter(data),
        '</div>'
    ].join('');
}

function renderShell(page, data, content) {
    app.innerHTML = `
        <div class="site-shell">
            ${renderHeader(data, page)}
            ${content}
            ${renderFooter(data)}
        </div>
    `;
}

function boot() {
    state.data = siteData;

    const page = document.body.dataset.page || 'home';
    document.title = `${state.data.site.name} · ${pageTitles[page] || titleCase(page)}`;

    if (page === 'cv') {
        initCvPage(state.data);
    } else if (page === 'research') {
        renderShell(page, state.data, renderResearch(state.data));
    } else if (page === 'projects') {
        renderShell(page, state.data, renderProjects(state.data));
    } else if (page === 'experience') {
        renderShell(page, state.data, renderExperience(state.data));
    } else if (page === 'gallery') {
        renderShell(page, state.data, renderGallery(state.data));
    } else {
        renderShell('home', state.data, renderHome(state.data));
    }

    bindThemeToggle();
    bindMediaFallbacks();
    bindMobileMenu();

    if (page === 'projects') {
        bindProjectToggle();
    }

    if (page === 'research') {
        bindPubImageZoom();
    }
}

function bindMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const siteTools = document.getElementById('site-tools');

    if (!toggle || !siteTools) return;

    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        siteTools.classList.toggle('is-open', !isExpanded);
        
        toggle.innerHTML = !isExpanded 
            ? '<i class="fa-solid fa-xmark"></i>' 
            : '<i class="fa-solid fa-bars"></i>';
    });
}

function bindProjectToggle() {
    const toggle = document.getElementById('toggle-projects');
    if (!toggle) return;

    const grid = document.getElementById('project-grid');
    const cards = grid.querySelectorAll('.project-card');
    const VISIBLE_COUNT = 6;

    toggle.addEventListener('click', () => {
        const collapsed = toggle.dataset.state === 'collapsed';

        cards.forEach((card, i) => {
            if (i >= VISIBLE_COUNT) {
                card.classList.toggle('is-hidden', !collapsed);
            }
        });

        if (collapsed) {
            toggle.dataset.state = 'expanded';
            toggle.innerHTML = 'Show Less <i class="fa-solid fa-chevron-up"></i>';
        } else {
            toggle.dataset.state = 'collapsed';
            toggle.innerHTML = 'Show More <i class="fa-solid fa-chevron-down"></i>';
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

function bindPubImageZoom() {
    const mediaBlocks = document.querySelectorAll('.publication-card .media');

    mediaBlocks.forEach((media) => {
        media.addEventListener('click', () => {
            const img = media.querySelector('img');
            if (!img) return;

            const overlay = document.createElement('div');
            overlay.className = 'pub-image-overlay';

            const zoomedImg = document.createElement('img');
            zoomedImg.src = img.src;
            zoomedImg.alt = img.alt;
            overlay.appendChild(zoomedImg);

            overlay.addEventListener('click', () => {
                overlay.remove();
                document.body.style.overflow = '';
            });

            document.addEventListener('keydown', function handler(e) {
                if (e.key === 'Escape') {
                    overlay.remove();
                    document.body.style.overflow = '';
                    document.removeEventListener('keydown', handler);
                }
            });

            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
        });
    });
}

boot();