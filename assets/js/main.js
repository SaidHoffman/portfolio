/* ==========================================================================
   Said Sigala · Portafolio
   Todo el contenido vive en /data/*.json (español e inglés).
   ========================================================================== */
(() => {
  'use strict';

  /* ---------- Textos de la interfaz ---------- */
  const I18N = {
    es: {
      'nav.featured': 'Argon2Net',
      'nav.projects': 'Proyectos',
      'nav.experience': 'Experiencia',
      'nav.about': 'Sobre mí',
      'nav.certs': 'Certificaciones',
      'nav.contact': 'Contacto',
      'ui.theme': 'Cambiar tema claro u oscuro',
      'ui.menu': 'Abrir menú',
      'ui.close': 'Cerrar',
      'hero.available': 'Disponible para nuevas oportunidades',
      'hero.cta': 'Ver proyectos',
      'hero.cv': 'Descargar CV',
      'term.file': 'perfil.yml',
      'sec.featured.k': 'proyecto estrella',
      'sec.featured.t': 'Mi Trabajo Terminal',
      'sec.projects.k': 'proyectos',
      'sec.projects.t': 'Proyectos de datos',
      'sec.projects.s': 'Pipelines que armé de principio a fin. Cada uno tiene su código y README en GitHub.',
      'sec.exp.k': 'experiencia',
      'sec.exp.t': 'Dónde he trabajado',
      'sec.about.k': 'sobre mí',
      'sec.about.t': 'Formación y stack',
      'sec.certs.k': 'certificaciones',
      'sec.certs.t': 'Certificaciones',
      'sec.contact.k': 'contacto',
      'sec.contact.t': 'Hablemos',
      'sec.contact.s': '¿Tienes una vacante, un proyecto o una pregunta? Escríbeme y te respondo pronto.',
      'featured.results': 'Resultados',
      'featured.nist': 'Pruebas NIST SP 800-22',
      'featured.pass': 'aprobada',
      'featured.fail': 'no aprobada',
      'featured.aval': 'Efecto avalancha',
      'featured.aval.pw': 'Contraseña',
      'featured.aval.salt': 'Salt',
      'featured.aval.avg': 'Promedio',
      'featured.aval.note': 'Bits que cambian al modificar 1 carácter o 1 bit. La línea marca el 50 % ideal.',
      'featured.paper': 'Leer el artículo',
      'featured.how': 'Cómo lo hicimos',
      'card.details': 'Ver detalles',
      'card.code': 'Código',
      'card.demo': 'Dashboard en vivo',
      'arch.title': 'Arquitectura del modelo',
      'arch.pw': 'Contraseña',
      'arch.salt': 'Salt · 128 bits',
      'arch.concat': 'Concatenación',
      'arch.out': 'Clave · 128 bits',
      'exp.letter': 'Carta de recomendación',
      'edu.gpa': 'Promedio',
      'cert.verify': 'Verificar',
      'form.name': 'nombre',
      'form.name.ph': 'Tu nombre',
      'form.email': 'correo',
      'form.email.ph': 'tu@correo.com',
      'form.msg': 'mensaje',
      'form.msg.ph': 'Cuéntame de la vacante o del proyecto…',
      'form.send': 'Enviar mensaje',
      'form.sending': 'Enviando…',
      'form.ok': 'Listo, recibí tu mensaje. Te respondo pronto.',
      'form.err': 'No se pudo enviar. Escríbeme directo a saidsigala14@gmail.com.',
      'contact.find': 'Encuéntrame en',
      'contact.avail.t': 'Disponibilidad',
      'contact.avail': 'Busco posiciones de <strong>Data Engineer</strong> o <strong>Analytics Engineer</strong>, remotas o híbridas, de tiempo completo.',
      'footer.built': 'Diseñado y construido por',
      'footer.top': 'volver arriba ↑',
      'meta.title': 'Said Sigala · Ingeniero de Datos',
      'meta.desc': 'Said Sigala Morales, ingeniero de datos. Pipelines ETL/ELT con Airflow, dbt y Google Cloud.'
    },
    en: {
      'nav.featured': 'Argon2Net',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.about': 'About',
      'nav.certs': 'Certifications',
      'nav.contact': 'Contact',
      'ui.theme': 'Toggle light or dark theme',
      'ui.menu': 'Open menu',
      'ui.close': 'Close',
      'hero.available': 'Open to new opportunities',
      'hero.cta': 'See projects',
      'hero.cv': 'Download CV',
      'term.file': 'profile.yml',
      'sec.featured.k': 'featured project',
      'sec.featured.t': 'My undergraduate thesis',
      'sec.projects.k': 'projects',
      'sec.projects.t': 'Data projects',
      'sec.projects.s': 'Pipelines I built end to end. Each one has its code and README on GitHub.',
      'sec.exp.k': 'experience',
      'sec.exp.t': 'Where I have worked',
      'sec.about.k': 'about',
      'sec.about.t': 'Education and stack',
      'sec.certs.k': 'certifications',
      'sec.certs.t': 'Certifications',
      'sec.contact.k': 'contact',
      'sec.contact.t': "Let's talk",
      'sec.contact.s': 'Have a role, a project or a question? Send me a message and I will get back to you soon.',
      'featured.results': 'Results',
      'featured.nist': 'NIST SP 800-22 tests',
      'featured.pass': 'passed',
      'featured.fail': 'failed',
      'featured.aval': 'Avalanche effect',
      'featured.aval.pw': 'Password',
      'featured.aval.salt': 'Salt',
      'featured.aval.avg': 'Average',
      'featured.aval.note': 'Bits that flip when 1 character or 1 bit changes. The line marks the ideal 50%.',
      'featured.paper': 'Read the paper',
      'featured.how': 'How we built it',
      'card.details': 'See details',
      'card.code': 'Code',
      'card.demo': 'Live dashboard',
      'arch.title': 'Model architecture',
      'arch.pw': 'Password',
      'arch.salt': 'Salt · 128 bits',
      'arch.concat': 'Concatenation',
      'arch.out': 'Key · 128 bits',
      'exp.letter': 'Recommendation letter',
      'edu.gpa': 'GPA',
      'cert.verify': 'Verify',
      'form.name': 'name',
      'form.name.ph': 'Your name',
      'form.email': 'email',
      'form.email.ph': 'you@email.com',
      'form.msg': 'message',
      'form.msg.ph': 'Tell me about the role or the project…',
      'form.send': 'Send message',
      'form.sending': 'Sending…',
      'form.ok': 'Done, I got your message. I will reply soon.',
      'form.err': "Couldn't send it. Email me directly at saidsigala14@gmail.com.",
      'contact.find': 'Find me on',
      'contact.avail.t': 'Availability',
      'contact.avail': "I'm looking for full-time <strong>Data Engineer</strong> or <strong>Analytics Engineer</strong> roles, remote or hybrid.",
      'footer.built': 'Designed and built by',
      'footer.top': 'back to top ↑',
      'meta.title': 'Said Sigala · Data Engineer',
      'meta.desc': 'Said Sigala Morales, data engineer. ETL/ELT pipelines with Airflow, dbt and Google Cloud.'
    }
  };

  const FILES = ['config', 'projects', 'experience', 'testimonial', 'education', 'skills', 'certifications'];
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  let DATA = null;
  let lang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'es';
  let lastFocus = null;

  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.es[k] || k;
  const tr = (v) => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[lang] ?? v.es ?? '') : (v ?? '');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- Iconos ---------- */
  const ICON = {
    mail: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.09V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/></svg>',
    github: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    ext: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
    doc: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ---------- Piezas reutilizables ---------- */
  const pipe = (nodes) => `<div class="pipe" aria-hidden="true">${
    nodes.map((n, i) => i
      ? `<span class="pipe-seg"><span class="pipe-link"></span><span class="pipe-node">${esc(tr(n))}</span></span>`
      : `<span class="pipe-node">${esc(tr(n))}</span>`).join('')
  }</div>`;
  const tags = (list) => `<div class="tags">${list.map((x) => `<span class="tag">${esc(tr(x))}</span>`).join('')}</div>`;
  const extLink = (href, label, cls = 'btn btn-ghost btn-sm', icon = ICON.ext) =>
    `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${label} ${icon}</a>`;

  /* ---------- Render: hero ---------- */
  function renderHero(cfg) {
    $('#heroName').textContent = cfg.name;
    $('#heroRole').textContent = tr(cfg.role);
    $('#heroTagline').textContent = tr(cfg.tagline);
    $('#cvLink').href = cfg.cv;

    $('#heroSocials').innerHTML = `
      <a href="mailto:${esc(cfg.email)}" aria-label="Email">${ICON.mail}</a>
      <a href="${esc(cfg.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON.linkedin}</a>
      <a href="${esc(cfg.github)}" target="_blank" rel="noopener" aria-label="GitHub">${ICON.github}</a>`;

    const photo = $('#heroPhoto');
    if (!photo.getAttribute('src')) photo.src = cfg.photo;
    $('#termName').textContent = cfg.shortName;
    $('#termRole').textContent = lang === 'en' ? 'data_engineer' : 'ingeniero_de_datos';

    const stack = cfg.stack.map((s) => s.toLowerCase()).join(', ');
    const L = lang === 'en'
      ? { c: '# profile', focus: 'pipelines · modeling · cloud', status: 'open to work', loc: tr(cfg.location) }
      : { c: '# perfil', focus: 'pipelines · modelado · nube', status: 'disponible', loc: tr(cfg.location) };
    $('#termBody').innerHTML =
`<span class="c">${L.c}</span>
<span class="k">name</span>: <span class="s">${esc(cfg.name)}</span>
<span class="k">role</span>: <span class="s">${esc(tr(cfg.role))}</span>
<span class="k">stack</span>: [<span class="s">${esc(stack)}</span>]
<span class="k">focus</span>: <span class="s">${L.focus}</span>
<span class="k">location</span>: <span class="s">${esc(L.loc)}</span>
<span class="k">status</span>: <span class="ok">● ${L.status}</span>`;

    $('#stats').innerHTML = cfg.stats.map((s) => `
      <div class="stat reveal">
        <div class="stat-value">${esc(s.value)}</div>
        <div class="stat-label">${esc(tr(s.label))}</div>
      </div>`).join('');
  }

  /* ---------- Render: proyecto estrella ---------- */
  function renderFeatured(p) {
    const passed = p.nist.filter((n) => n[2]).length;
    const av = p.avalanche;
    const avRow = (label, v) => `
      <div class="aval-row">
        <span>${label}</span>
        <div class="aval-track"><div class="aval-fill" data-w="${v}"></div><span class="aval-ideal" title="50 %"></span></div>
        <b>${v.toFixed(2)}%</b>
      </div>`;
    const metrics = p.metrics.filter((m) => m.value !== '13/15').slice(0, 3);

    $('#featuredCard').innerHTML = `
      <article class="featured reveal">
        <div class="featured-main">
          <div class="featured-top">
            <span class="kicker">${esc(tr(p.kicker))}</span>
            <span class="badge-star">${ICON.star} ${esc(tr(p.badge))}</span>
          </div>
          <h3 class="featured-title">${esc(p.title)}</h3>
          <p class="featured-subtitle">${esc(tr(p.subtitle))}</p>
          <p class="featured-summary">${esc(tr(p.summary))}</p>
          ${pipe(p.pipeline)}
          ${tags(p.tags)}
          <div class="featured-actions">
            <a class="btn btn-primary" href="${esc(p.links.paper)}" target="_blank" rel="noopener">${ICON.doc} ${t('featured.paper')}</a>
            <button type="button" class="btn btn-ghost" data-open="${p.id}">${t('featured.how')} ${ICON.arrow}</button>
            ${extLink(p.links.github, 'GitHub', 'btn btn-ghost', ICON.github)}
          </div>
        </div>
        <div class="featured-side">
          <div>
            <div class="panel-head">
              <span class="panel-title">${t('featured.nist')}</span>
              <span class="panel-value accent">${passed}/${p.nist.length}</span>
            </div>
            <div class="nist-grid">
              ${p.nist.map(([name, pv, ok]) => `<span class="nist-cell${ok ? '' : ' fail'}" title="${esc(name)} · p = ${esc(pv)} · ${ok ? t('featured.pass') : t('featured.fail')}"></span>`).join('')}
            </div>
            <div class="nist-legend"><span>${passed} ${t('featured.pass')}${lang === 'es' && passed !== 1 ? 's' : ''}</span><span class="f">DFT, Non-Overlapping Template</span></div>
          </div>
          <div>
            <div class="panel-head">
              <span class="panel-title">${t('featured.aval')}</span>
              <span class="panel-value" style="color:var(--amber)">${av.overall.toFixed(2)}% <span style="color:var(--faint);font-weight:400">/ ${av.ideal}%</span></span>
            </div>
            <div class="aval">
              ${avRow(t('featured.aval.pw'), av.password)}
              ${avRow(t('featured.aval.salt'), av.salt)}
              ${avRow(t('featured.aval.avg'), av.overall)}
              <p class="aval-note">${t('featured.aval.note')}</p>
            </div>
          </div>
          <div class="metric-row">
            ${metrics.map((m) => `<div class="metric"><div class="metric-v">${esc(m.value)}</div><div class="metric-l">${esc(tr(m.label))}</div></div>`).join('')}
          </div>
        </div>
      </article>`;
  }

  /* ---------- Render: tarjetas de proyectos ---------- */
  function renderProjects(list) {
    $('#projectsGrid').innerHTML = list.map((p) => {
      const img = p.images && p.images[0];
      return `
      <article class="card reveal">
        <div class="card-visual${img ? ' has-img' : ''}">
          ${img ? `<img src="${esc(img)}" alt="${esc(p.title)}" loading="lazy"/>` : ''}
          ${pipe(p.pipeline)}
        </div>
        <div class="card-body">
          <p class="card-sub">${esc(tr(p.subtitle))}</p>
          <h3 class="card-title">${esc(p.title)}</h3>
          <p class="card-summary">${esc(tr(p.summary))}</p>
          ${tags(p.tags)}
          <div class="card-actions">
            <button type="button" class="btn btn-primary btn-sm" data-open="${p.id}">${t('card.details')} ${ICON.arrow}</button>
            ${p.links.github ? extLink(p.links.github, t('card.code'), 'btn btn-ghost btn-sm', ICON.github) : ''}
            ${p.links.demo ? extLink(p.links.demo, t('card.demo')) : ''}
          </div>
        </div>
      </article>`;
    }).join('');
  }

  /* ---------- Render: experiencia ---------- */
  function renderExperience(jobs, testi) {
    $('#timeline').innerHTML = jobs.map((j) => `
      <li class="job reveal">
        <p class="job-date">${esc(tr(j.start))} — ${esc(tr(j.end))}</p>
        <h3 class="job-role">${esc(tr(j.role))}</h3>
        <p class="job-org">${esc(j.company)} <span>· ${esc(tr(j.type))}</span></p>
        <ul>${j.bullets.map((b) => `<li>${esc(tr(b))}</li>`).join('')}</ul>
        ${tags(j.tags)}
        ${j.letterUrl ? extLink(j.letterUrl, t('exp.letter'), 'btn btn-ghost btn-sm', ICON.doc) : ''}
      </li>`).join('');

    const note = tr(testi.note);
    $('#testimonial').innerHTML = `
      <div class="q" aria-hidden="true">“</div>
      <blockquote>${esc(tr(testi.quote))}</blockquote>
      ${note ? `<p class="note">${esc(note)}</p>` : ''}
      <figcaption>
        <span class="avatar">${esc(testi.initials)}</span>
        <span><span class="t-name">${esc(testi.author)}</span><br/><span class="t-role">${esc(tr(testi.role))}</span></span>
      </figcaption>`;
  }

  /* ---------- Render: sobre mí, educación y stack ---------- */
  function renderAbout(cfg, edu, skills) {
    $('#aboutBio').textContent = tr(cfg.bio);
    $('#education').innerHTML = edu.map((e) => `
      <div class="edu">
        <div class="edu-top">
          <span class="edu-degree">${esc(tr(e.degree))}</span>
          <span class="edu-years">${esc(e.years)}</span>
        </div>
        <p class="edu-inst">${esc(e.institution)}</p>
        <div class="edu-meta"><span class="pill">${t('edu.gpa')} ${esc(e.gpa)}</span><span class="pill muted">${esc(tr(e.status))}</span></div>
        <ul>${e.highlights.map((h) => `<li>${esc(tr(h))}</li>`).join('')}</ul>
      </div>`).join('');

    $('#skills').innerHTML = skills.map((g) => `
      <div class="skill-group reveal">
        <h3>${esc(tr(g.category))}</h3>
        ${tags(g.items)}
      </div>`).join('');
  }

  /* ---------- Render: certificaciones ---------- */
  function renderCerts(list) {
    $('#certs').innerHTML = list.map((c) => `
      <div class="cert reveal">
        <span class="cert-abbr" style="background:color-mix(in srgb, ${esc(c.color)} 16%, transparent);color:color-mix(in srgb, ${esc(c.color)} 80%, var(--text))">${esc(c.abbr)}</span>
        <div>
          <p class="cert-name">${esc(c.name)}</p>
          <p class="cert-issuer">${esc(c.issuer)}</p>
          <div class="cert-foot">
            <span>${esc(tr(c.date))}</span>
            ${c.verifyUrl ? `<a href="${esc(c.verifyUrl)}" target="_blank" rel="noopener">${t('cert.verify')} ↗</a>` : ''}
          </div>
        </div>
      </div>`).join('');
  }

  /* ---------- Render: contacto ---------- */
  function renderContact(cfg) {
    const gh = cfg.github.replace(/^https?:\/\//, '');
    const li = cfg.linkedin.replace(/^https?:\/\/(www\.)?/, '');
    $('#contactLinks').innerHTML = `
      <a class="contact-link" href="mailto:${esc(cfg.email)}">${ICON.mail}<span>${esc(cfg.email)}</span></a>
      <a class="contact-link" href="${esc(cfg.linkedin)}" target="_blank" rel="noopener">${ICON.linkedin}<span>${esc(li)}</span></a>
      <a class="contact-link" href="${esc(cfg.github)}" target="_blank" rel="noopener">${ICON.github}<span>${esc(gh)}</span></a>`;
    $('#contactLocation').textContent = '📍 ' + tr(cfg.location);
  }

  /* ---------- Modal de proyecto ---------- */
  function archDiagram() {
    return `
      <div class="arch" aria-label="${t('arch.title')}">
        <p class="arch-title">${t('arch.title')}</p>
        <div class="arch-grid">
          <div class="arch-lane l1">${pipe([t('arch.pw'), 'Embedding 128 + PE', 'BiLSTM 2×64'])}</div>
          <div class="arch-lane l2">${pipe([t('arch.salt'), 'Dense 128→256→256→128'])}</div>
          <div class="arch-merge">
            <span class="arch-brace"></span>
            ${pipe([t('arch.concat') + ' 256', 'MLP 256→256→128', t('arch.out')])}
          </div>
        </div>
      </div>`;
  }

  function openModal(id) {
    const p = DATA.projects.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    const links = [
      p.links.paper ? `<a class="btn btn-primary" href="${esc(p.links.paper)}" target="_blank" rel="noopener">${ICON.doc} ${t('featured.paper')}</a>` : '',
      p.links.github ? extLink(p.links.github, t('card.code'), p.links.paper ? 'btn btn-ghost' : 'btn btn-primary', ICON.github) : '',
      p.links.demo ? extLink(p.links.demo, t('card.demo'), 'btn btn-ghost') : ''
    ].join('');

    $('#modalBody').innerHTML = `
      ${p.kicker ? `<p class="modal-kicker">${esc(tr(p.kicker))}</p>` : ''}
      <h2 class="modal-title" id="modalTitle">${esc(p.title)}</h2>
      <p class="modal-sub">${esc(tr(p.subtitle))}</p>
      ${pipe(p.pipeline)}
      ${p.id === 'argon2net' ? archDiagram() : ''}
      <div class="modal-sections">
        ${p.details.map((d) => `<section><h3>${esc(tr(d.h))}</h3><p>${esc(tr(d.p))}</p></section>`).join('')}
      </div>
      ${p.images && p.images.length ? `<div class="modal-gallery">${p.images.map((src, i) => `<button type="button" data-zoom="${esc(src)}" aria-label="Captura ${i + 1}"><img src="${esc(src)}" alt="${esc(p.title)} · ${i + 1}" loading="lazy"/></button>`).join('')}</div>` : ''}
      ${tags(p.tags)}
      <div class="modal-links">${links}</div>`;

    const m = $('#modal');
    m.hidden = false;
    m.dataset.id = id;
    document.body.style.overflow = 'hidden';
    $('.modal-panel', m).scrollTop = 0;
    $('.modal-close', m).focus();
  }

  function closeModal() {
    const m = $('#modal');
    if (m.hidden) return;
    m.hidden = true;
    delete m.dataset.id;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  function openLightbox(src) {
    const lb = $('#lightbox');
    $('#lightboxImg').src = src;
    lb.hidden = false;
    $('.modal-close', lb).focus();
  }
  function closeLightbox() { $('#lightbox').hidden = true; }

  /* ---------- Textos estáticos ---------- */
  function applyStatic() {
    document.documentElement.setAttribute('lang', lang);
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    $$('.lang-switch button').forEach((b) => { const on = b.dataset.lang === lang; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    document.title = t('meta.title');
    const md = $('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));
  }

  function renderAll() {
    const d = DATA;
    applyStatic();
    renderHero(d.config);
    renderFeatured(d.projects.find((p) => p.featured));
    renderProjects(d.projects.filter((p) => !p.featured));
    renderExperience(d.experience, d.testimonial);
    renderAbout(d.config, d.education, d.skills);
    renderCerts(d.certifications);
    renderContact(d.config);
    observeReveal();
    const m = $('#modal');
    if (!m.hidden && m.dataset.id) openModal(m.dataset.id);
  }

  function setLang(l) {
    if (l === lang) return;
    lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    renderAll();
  }

  /* ---------- Animación al hacer scroll ---------- */
  let revealObs = null;
  function observeReveal() {
    const els = $$('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); fillBars(); return; }
    if (!revealObs) {
      revealObs = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add('in');
          revealObs.unobserve(en.target);
          if (en.target.classList.contains('featured')) fillBars();
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    els.forEach((e) => revealObs.observe(e));
    if ($('.featured.in')) fillBars();
  }
  function fillBars() {
    // La barra ocupa 0–100 %; la marca del ideal está en 50 %.
    requestAnimationFrame(() => $$('.aval-fill').forEach((b) => { b.style.width = b.dataset.w + '%'; }));
  }

  /* ---------- Navegación ---------- */
  function initNav() {
    const nav = $('#nav');
    const bar = $('#scrollProgress');
    const onScroll = () => {
      const h = document.documentElement;
      nav.classList.toggle('scrolled', h.scrollTop > 8);
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const links = $('#navLinks');
    const btn = $('#menuBtn');
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    links.addEventListener('click', (e) => {
      if (e.target.closest('a')) { links.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });

    if ('IntersectionObserver' in window) {
      const map = new Map($$('.nav-links a').map((a) => [a.getAttribute('href').slice(1), a]));
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && map.has(en.target.id)) {
            map.forEach((a) => a.classList.remove('active'));
            map.get(en.target.id).classList.add('active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      $$('main section[id]').forEach((s) => obs.observe(s));
    }
  }

  function initTheme() {
    $('#themeToggle').addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'light' ? '#F6F7F9' : '#0A0E13');
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---------- Formulario (Netlify Forms) ---------- */
  function initForm() {
    const form = $('#contactForm');
    const btn = $('#submitBtn');
    const status = $('#formStatus');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = t('form.sending');
      status.className = 'form-status';
      status.textContent = '';
      try {
        const body = new URLSearchParams(new FormData(form)).toString();
        const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        status.className = 'form-status ok';
        status.textContent = t('form.ok');
      } catch (err) {
        status.className = 'form-status err';
        status.textContent = t('form.err');
      } finally {
        btn.disabled = false;
        btn.textContent = t('form.send');
      }
    });
  }

  /* ---------- Eventos globales ---------- */
  function initEvents() {
    document.addEventListener('click', (e) => {
      const open = e.target.closest('[data-open]');
      if (open) { openModal(open.dataset.open); return; }
      if (e.target.closest('[data-close]')) { closeModal(); return; }
      const zoom = e.target.closest('[data-zoom]');
      if (zoom) { openLightbox(zoom.dataset.zoom); return; }
      if (e.target.closest('[data-lb-close]') || e.target.id === 'lightbox') { closeLightbox(); return; }
      const lb = e.target.closest('.lang-switch button');
      if (lb) setLang(lb.dataset.lang);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (!$('#lightbox').hidden) closeLightbox();
      else closeModal();
    });
  }

  /* ---------- Arranque ---------- */
  async function init() {
    applyStatic();
    initTheme();
    initNav();
    initEvents();
    initForm();
    try {
      const res = await Promise.all(FILES.map((f) => fetch(`/data/${f}.json`, { cache: 'no-cache' }).then((r) => { if (!r.ok) throw new Error(f); return r.json(); })));
      DATA = Object.fromEntries(FILES.map((f, i) => [f, res[i]]));
      renderAll();
    } catch (err) {
      console.error('No se pudieron cargar los datos del portafolio:', err);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
