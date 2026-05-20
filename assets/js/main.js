/* ============================================================
   PORTFOLIO — main.js
   Fetches all JSON data files and renders the entire site.
   ============================================================ */

/* ─── UTILS ─── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function svgIcon(path, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

function animateStatNum(el, raw) {
  const m = raw.match(/^([<~]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return;
  const [, pre, numStr, suf] = m;
  const target = parseFloat(numStr);
  const dec = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  let t0 = null;
  function step(ts) {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / 1400, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = pre + (dec ? (target * ease).toFixed(dec) : Math.floor(target * ease)) + suf;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = raw;
  }
  requestAnimationFrame(step);
}

const ICONS = {
  user:    '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  github:  '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  mail:    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  chart:   '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  image:   '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  link:    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
};

/* ─── FETCH ALL DATA ─── */
async function fetchAll() {
  const paths = ['config', 'about', 'skills', 'projects', 'experience', 'certifications', 'education'];
  const results = await Promise.all(
    paths.map(p => fetch(`/data/${p}.json`).then(r => r.json()))
  );
  return Object.fromEntries(paths.map((p, i) => [p, results[i]]));
}

/* ─── RENDER NAV / HERO ─── */
function renderHero(cfg, about) {
  // Logo
  $('#navLogo').textContent = cfg.initials + '.';
  document.title = `Portafolio — ${cfg.name}`;

  // Available badge
  const badge = $('#heroAvailable');
  if (!cfg.available) badge.style.display = 'none';

  // Name + title
  const nameParts = cfg.name.split(' ');
  const first = nameParts.slice(0, -1).join(' ');
  const last  = nameParts[nameParts.length - 1];
  $('#heroName').innerHTML = `${first} <em>${last}</em>`;
  $('#heroTitle').textContent = cfg.title;
  $('#heroBio').textContent = cfg.shortBio;

  // CTA links
  $('#heroCvLink').href = cfg.cv;
  $('#heroProjectsLink').href = '#projects';

  // Socials
  $('#heroSocials').innerHTML = [
    { href: `mailto:${cfg.email}`,  icon: ICONS.mail,     label: 'Email' },
    { href: cfg.linkedin,           icon: ICONS.linkedin,  label: 'LinkedIn' },
    { href: cfg.github,             icon: ICONS.github,    label: 'GitHub' },
  ].map(s => `
    <a href="${s.href}" class="social-link" title="${s.label}" target="_blank" rel="noopener">
      ${svgIcon(s.icon, 16)}
    </a>
  `).join('');

  // Photo with floating badges
  const photoEl = $('#heroPhoto');
  if (cfg.photo) {
    photoEl.innerHTML = `
      <div class="hero-photo-inner">
        <img src="${cfg.photo}" alt="${cfg.name}" loading="lazy"/>
      </div>
      <div class="hero-float-badge badge-1">Python · SQL</div>
      <div class="hero-float-badge badge-2">Apache Airflow</div>
      <div class="hero-float-badge badge-3">dbt · BigQuery</div>
    `;
  } else {
    photoEl.innerHTML = `
      <div class="hero-photo-inner">
        <div class="hero-photo-placeholder">
          ${svgIcon(ICONS.user, 56)}
          <p>Agrega tu foto</p>
        </div>
      </div>`;
  }

  // Nav CTA link
  $('#navCta').href = `mailto:${cfg.email}`;

  // Footer
  $('#footerName').textContent = cfg.name;
  const year = new Date().getFullYear();
  $('#footerYear').textContent = year;
}

/* ─── RENDER EDUCATION ─── */
function renderEducation(cfg, education) {
  $('#educationList').innerHTML = `<div class="education-grid">${education.map(e => `
    <div class="education-card fade-up">
      <div class="education-card-header">
        <div>
          <div class="education-degree">${e.degree}</div>
          <div class="education-institution">${e.institution}</div>
        </div>
        <div class="education-date">${e.startDate} – ${e.endDate}</div>
      </div>
      <div class="education-meta">
        ${e.status ? `<span class="education-badge">${e.status}</span>` : ''}
        ${e.gpa ? `<span class="education-gpa">Promedio ${e.gpa}</span>` : ''}
      </div>
      ${e.highlights.length ? `<ul class="timeline-bullets">${e.highlights.map(h => `<li>${h}</li>`).join('')}</ul>` : ''}
    </div>
  `).join('')}</div>`;
}

/* ─── RENDER SKILLS ─── */
const SKILL_ICONS = {
  'Lenguajes y Consultas':          '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  'Stack de Datos y Orquestación':  '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  'Nube':                           '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  'APIs e Integración':             '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  'ML y Ciencia de Datos':          '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
  'Infraestructura y Herramientas': '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
};

function renderSkills(skills) {
  $('#skillsGrid').innerHTML = skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-header">
        <div class="skill-group-icon">${svgIcon(SKILL_ICONS[group.category] || ICONS.chart, 15)}</div>
        <div class="skill-group-title">${group.category}</div>
      </div>
      <div class="skill-tags">
        ${group.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ─── RENDER PROJECTS ─── */
let activeProjects = [];

function screenshotEl(src, idx) {
  if (src && !src.includes('placeholder')) {
    return `<div class="modal-screenshot"><img src="${src}" alt="Captura ${idx + 1}" loading="lazy"/></div>`;
  }
  return `
    <div class="modal-screenshot">
      <div class="modal-screenshot-ph">
        ${svgIcon(ICONS.image, 36)}
        <span>Agregar captura ${idx + 1}</span>
      </div>
    </div>`;
}

function renderProjects(projects) {
  activeProjects = projects;
  $('#projectsGrid').innerHTML = projects.map((p, i) => `
    <article class="project-card fade-up delay-${(i % 3) + 1}" data-id="${p.id}" tabindex="0" role="button" aria-label="Ver detalles de ${p.title}" style="--card-accent:${p.thumbAccent}">
      <div class="project-thumb" style="background:${p.thumbColor}">
        ${p.screenshots[0] && !p.screenshots[0].includes('placeholder')
          ? `<img src="${p.screenshots[0]}" alt="${p.title}" loading="lazy"/>`
          : `<div class="project-thumb-placeholder" style="color:${p.thumbAccent}">
               <div class="project-thumb-icon" style="background:${p.thumbAccent}1A;border:1.5px solid ${p.thumbAccent}35">
                 ${svgIcon(ICONS.chart, 28)}
               </div>
               ${p.thumbMetric ? `<div class="project-thumb-metric">${p.thumbMetric}</div>` : ''}
               <span class="project-thumb-name">${p.tags.slice(0, 3).join(' · ')}</span>
             </div>`
        }
        <span class="project-thumb-dataset" style="color:${p.thumbAccent}">${p.dataset}</span>
      </div>
      <div class="project-body">
        <div class="project-chips">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-links">
          <a class="project-link" href="#" onclick="openModal(${p.id});return false">Ver detalles →</a>
          ${p.github ? `<a class="project-link ghost" href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');

  // Card click opens modal
  $$('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(+card.dataset.id); });
  });
}

/* ─── RENDER EXPERIENCE ─── */
function renderExperience(jobs) {
  $('#timeline').innerHTML = jobs.map(job => `
    <div class="timeline-item fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${job.startDate} – ${job.endDate}</div>
      <div class="timeline-role">${job.role}</div>
      <div class="timeline-company">
        ${job.company}
        <span>· ${job.type}</span>
      </div>
      <ul class="timeline-bullets">
        ${job.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <div class="timeline-tags">
        ${job.tags.map(t => `<span class="timeline-tag">${t}</span>`).join('')}
      </div>
      ${job.letterUrl ? `<div style="margin-top:0.75rem"><a href="${job.letterUrl}" class="btn-ghost" target="_blank" rel="noopener" style="font-size:0.8125rem;padding:0.5rem 1.25rem">Carta de recomendación ↗</a></div>` : ''}
    </div>
  `).join('');
}

/* ─── RENDER CERTIFICATIONS ─── */
function renderCertifications(certs) {
  $('#certsGrid').innerHTML = certs.map(c => `
    <div class="cert-card fade-up" style="border-top: 3px solid ${c.color}">
      <div class="cert-header">
        <div class="cert-badge" style="background:${c.color}22; color:${c.color}">${c.abbr}</div>
        <div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
      </div>
      <div class="cert-footer">
        <div>
          <div class="cert-id">${c.credentialId}</div>
          <div class="cert-date">${c.date}</div>
        </div>
        ${c.verifyUrl && c.verifyUrl !== '#' ? `<a href="${c.verifyUrl}" class="cert-verify" target="_blank" rel="noopener">Verificar ↗</a>` : ''}
      </div>
    </div>
  `).join('');
}

/* ─── RENDER CONTACT ─── */
function renderContact(cfg) {
  $('#contactEmail').href   = `mailto:${cfg.email}`;
  $('#contactEmailTxt').textContent = cfg.email;
  $('#contactLinkedIn').href = cfg.linkedin;
  $('#contactLinkedInTxt').textContent = cfg.linkedin.replace('https://', '');
  $('#contactGithub').href  = cfg.github;
  $('#contactGithubTxt').textContent = cfg.github.replace('https://', '');
  $('#contactLocation').textContent = cfg.location;

  $('#preferredStack').innerHTML = cfg.preferredStack.map(s => `<span class="chip">${s}</span>`).join('');
}

/* ─── RENDER STATS ─── */
function renderStats() {
  const stats = [
    { num: '2M+',    label: 'Registros procesados',      sub: 'Pipeline ETL Argon2Net' },
    { num: '86.67%', label: 'Aprobación NIST SP 800-22', sub: '13 de 15 pruebas estadísticas' },
    { num: '120+',   label: 'Casos de prueba',           sub: 'Cobertura 100% · América Móvil' },
    { num: '9',      label: 'Certificaciones',           sub: 'Google Cloud · Stanford · HackerRank' },
    { num: '<1 min', label: 'Latencia de datos',         sub: 'Weather Pipeline · tiempo real' },
  ];
  $('#statsGrid').innerHTML = stats.map(s => `
    <div class="stat-item">
      <div class="stat-num" data-raw="${s.num}">${s.num}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-sub">${s.sub}</div>
    </div>
  `).join('');

  const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateStatNum(e.target, e.target.dataset.raw);
        countObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  $$('.stat-num').forEach(el => countObs.observe(el));
}

/* ─── RENDER MARQUEE ─── */
function renderMarquee(skills) {
  const items = skills.flatMap(g => g.items);
  const doubled = [...items, ...items];
  $('#techMarquee').innerHTML = `
    <div class="marquee-track">
      ${doubled.map(t => `<span class="marquee-item"><span class="marquee-dot"></span>${t}</span>`).join('')}
    </div>`;
}

/* ─── RENDER TESTIMONIAL ─── */
function renderTestimonial() {
  $('#testimonialBlock').innerHTML = `
    <div class="testimonial-quote-icon">"</div>
    <p class="testimonial-text">
      "Said desempeñó las actividades que le fueron asignadas con responsabilidad y profesionalismo.
      Mostró disposición para integrarse a la dinámica de trabajo del equipo."
    </p>
    <div class="testimonial-author">
      <div class="testimonial-avatar">MS</div>
      <div>
        <div class="testimonial-name">Mauricio Solís Romero</div>
        <div class="testimonial-role">Líder de QA · Portales Web Marca Claro · América Móvil Contenido</div>
      </div>
    </div>
  `;
}

/* ─── PROJECT MODAL ─── */
function openModal(id) {
  const p = activeProjects.find(x => x.id === id);
  if (!p) return;

  const overlay = $('#modalOverlay');
  const content = $('#modalContent');

  content.innerHTML = `
    <div class="modal-head">
      <div>
        <div class="project-chips" style="margin-bottom:0.5rem">
          ${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
        <h2 style="font-family:var(--serif);font-size:1.625rem;line-height:1.2;color:var(--text)">${p.title}</h2>
      </div>
      <button class="modal-close" id="modalCloseBtn" aria-label="Cerrar modal">✕</button>
    </div>
    <div class="modal-body">
      <div class="modal-screenshots">
        ${p.screenshots.map((src, i) => screenshotEl(src, i)).join('')}
      </div>

      <div class="modal-section-lbl">Descripción del proyecto</div>
      <p class="modal-long-desc">${p.longDesc}</p>

      <div class="modal-section-lbl">Detalles del proyecto</div>
      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <div class="modal-meta-label">Dataset</div>
          <div class="modal-meta-val">${p.dataset}</div>
        </div>
        <div class="modal-meta-item">
          <div class="modal-meta-label">Duración</div>
          <div class="modal-meta-val">${p.duration}</div>
        </div>
        <div class="modal-meta-item">
          <div class="modal-meta-label">Mi rol</div>
          <div class="modal-meta-val">${p.role}</div>
        </div>
        <div class="modal-meta-item">
          <div class="modal-meta-label">Resultado</div>
          <div class="modal-meta-val">${p.outcome}</div>
        </div>
      </div>

      <div class="modal-actions">
        ${p.demo ? `<a href="${p.demo}" class="btn-primary" target="_blank" rel="noopener" style="font-size:0.875rem;padding:0.625rem 1.5rem">Demo en vivo →</a>` : ''}
        ${p.github ? `<a href="${p.github}" class="btn-ghost" target="_blank" rel="noopener" style="font-size:0.875rem;padding:0.625rem 1.5rem">Ver en GitHub</a>` : ''}
        ${p.articleUrl ? `<a href="${p.articleUrl}" class="btn-ghost" target="_blank" rel="noopener" style="font-size:0.875rem;padding:0.625rem 1.5rem">Leer artículo ↗</a>` : ''}
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  $('#modalCloseBtn').addEventListener('click', closeModal);
}

function closeModal() {
  $('#modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── CONTACT FORM ─── */
function initContactForm() {
  const form    = $('#contactForm');
  const btn     = $('#submitBtn');
  const success = $('#formSuccess');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Enviando…';

    // Simulate / replace with your form provider endpoint (Netlify Forms, Formspree, etc.)
    await new Promise(r => setTimeout(r, 900));

    btn.style.display = 'none';
    success.style.display = 'block';
    form.reset();
  });
}

/* ─── TYPED HERO ANIMATION ─── */
function initTyped() {
  const el = $('#heroTyped');
  if (!el) return;
  const phrases = [
    'Pipeline ETL/ELT de extremo a extremo',
    'Orquestación con Apache Airflow',
    'Analytics Engineering con dbt',
    'Google Cloud · BigQuery',
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false, pause = 0;
  function tick() {
    if (pause > 0) { pause--; setTimeout(tick, 80); return; }
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++charIdx);
      if (charIdx === phrase.length) { deleting = true; pause = 22; }
      setTimeout(tick, 65);
    } else {
      el.textContent = phrase.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        pause = 6;
      }
      setTimeout(tick, 38);
    }
  }
  setTimeout(tick, 900);
}

/* ─── THEME TOGGLE ─── */
const SUN  = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
const MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

function initTheme() {
  const btn = $('#themeToggle');
  const update = () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = svgIcon(dark ? SUN : MOON, 17);
  };
  update();
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    update();
  });
}

/* ─── SCROLL PROGRESS + BACK TO TOP ─── */
function initScrollExtras() {
  const progress = $('#scrollProgress');
  const backTop  = $('#backTop');

  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    progress.style.setProperty('--progress', `${pct.toFixed(1)}%`);
    backTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── SCROLL ANIMATIONS ─── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  $$('.fade-up').forEach(el => observer.observe(el));
}

/* ─── ACTIVE NAV ─── */
function initActiveNav() {
  const sections = $$('section[id]');
  const links    = $$('.nav-links a');
  const nav      = $('nav');

  const onScroll = () => {
    // scrolled class for shadow
    nav.classList.toggle('scrolled', window.scrollY > 20);

    // active section
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─── MOBILE NAV ─── */
function initMobileNav() {
  const btn   = $('#mobileNavBtn');
  const links = $('#navLinks');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  // Close on link click
  $$('.nav-links a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ─── MODAL EVENTS ─── */
function initModal() {
  const overlay = $('#modalOverlay');
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ─── INIT ─── */
(async function init() {
  try {
    const data = await fetchAll();
    const { config, about, skills, projects, experience, certifications, education } = data;

    renderHero(config, about);
    renderStats();
    renderEducation(config, education);
    renderSkills(skills);
    renderMarquee(skills);
    renderProjects(projects);
    renderExperience(experience);
    renderTestimonial();
    renderCertifications(certifications);
    renderContact(config);

    initContactForm();
    initModal();
    initTyped();
    initScrollAnimations();
    initActiveNav();
    initMobileNav();
    initTheme();
    initScrollExtras();

    // Hide loader
    const loader = $('#loader');
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 600);

  } catch (err) {
    console.error('Portfolio failed to load data:', err);
    $('#loader').innerHTML = '<p style="color:#c00;font-family:sans-serif">Error al cargar los datos del portafolio. Revisa la consola para más detalles.</p>';
  }
})();
