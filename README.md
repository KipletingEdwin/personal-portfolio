
# Edwin Kipleting — Portfolio (React + Tailwind v4 + Framer Motion)

A single-page portfolio built with React, Tailwind CSS v4, Lucide React / React Icons, and Framer Motion.

## Tech stack

- **React** — UI library
- **Vite** — build tool & dev server
- **Tailwind CSS v4** — utility-first styling (config via `@theme` in `src/index.css`)
- **Framer Motion** — page and scroll animations
- **Lucide React** + **React Icons** — icon sets
- **EmailJS** — contact form email delivery (no backend required)

## Getting started

```bash
npm install
```

Create a `.env` file in the project root (see `.env.example`) with your EmailJS credentials:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


Then run the dev server:

```bash
npm run dev
```

Open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

src/
├── components/ # One component per page section
├── data/content.js # Editable content: skills, services, projects, testimonials, nav/social links
├── assets/ # Profile photo and other static images
├── App.jsx # Assembles all sections
├── main.jsx # React entry point
└── index.css # Tailwind v4 theme tokens (@theme) and global styles


## Editing content

Most text content (skills, services, project cards, testimonials, nav links, social links) lives in `src/data/content.js` — edit the arrays there rather than the component files.

## Notes

- Project preview images in `Projects.jsx` are placeholder stock photos — replace the `src` attributes with real screenshots of your projects.
- `.env` is gitignored and must be set up locally (and in your deployment host's environment variables) for the contact form to send email.
- In your EmailJS dashboard, restrict allowed origins/domains for your public key before deploying, so the credentials in this public repo can't be used to spam your form from elsewhere.

## Deployment

Set the three `VITE_EMAILJS_*` environment variables in your host's dashboard (Vercel, Netlify, etc.) before deploying — the build will fail to send emails without them.