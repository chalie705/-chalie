# Chalie Melkamu Wagnew — Portfolio

Plain HTML, CSS and JavaScript. No build step.

## Run locally
Open `index.html` in a browser, or use VS Code "Live Server", or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Customize
- Links: edit `CONFIG` at the top of `js/script.js` (GitHub, LinkedIn, email). Your email is already set; LinkedIn still needs your real profile URL.
- CV: `assets/cv.pdf` is in place — the "Download CV" button opens it. Replace the file with your own if you make a newer version.
- Portrait: `images/portrait.jpg` is in place and shown in the About section.
- Projects: edit the `<article class="project">` blocks (text, `data-tags`, GitHub/demo links). Replace images in `images/` with real screenshots.
- Colors/fonts: CSS variables at the top of `css/style.css`.

## Contact form
No backend is connected; the form validates input and opens the visitor's email app. To send directly, create a free form at https://formspree.io and set the form's `action` to your Formspree URL with `method="POST"`, then remove the mailto code in `script.js`.

## Publish on GitHub Pages
1. Create a repo (e.g. `chalie705.github.io`) and upload these files to the root.
2. Repo Settings → Pages → Source: "Deploy from a branch" → `main` / root → Save.
3. Your site will be live at https://chalie705.github.io in a minute or two.
Netlify and Vercel also work: drag-and-drop this folder.
