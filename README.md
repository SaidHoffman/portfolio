# Portafolio · Said Sigala

Mi portafolio personal como Data Engineer: [said-sigala.netlify.app](https://said-sigala.netlify.app/)

Es un sitio estático en HTML, CSS y JavaScript, sin frameworks ni paso de build. Netlify lo publica tal cual desde este repo.

## Cómo está armado

- `index.html`: la estructura de la página.
- `assets/css/styles.css`: estilos, con tema oscuro (por defecto) y claro.
- `assets/js/main.js`: carga los datos, arma las secciones y maneja el idioma (ES/EN), el tema, el modal de proyectos y el formulario.
- `data/*.json`: todo el contenido. Cada texto tiene su versión `es` y `en`.

| Archivo | Qué contiene |
|---------|--------------|
| `config.json` | Nombre, rol, bio, links, CV y las cifras del inicio |
| `projects.json` | Proyectos. El que tiene `"featured": true` sale como proyecto estrella |
| `experience.json` / `testimonial.json` | Experiencia laboral y la cita de mi líder |
| `education.json`, `skills.json`, `certifications.json` | Formación, stack y certificaciones |

Para agregar un proyecto basta con sumar un objeto a `projects.json`; la tarjeta, el pipeline y el modal se generan solos.

## Probarlo en local

```bash
python -m http.server 8000
```

y abrir <http://localhost:8000>. El formulario de contacto usa Netlify Forms, así que solo envía mensajes una vez desplegado.
