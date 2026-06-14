# AuraVolt – Solar Installation Website

Multi-page solar installation website. Deploy on GitHub Pages or run locally with npm.

## File Structure

```
auravolt/
├── index.html        ← Home
├── about.html        ← About / Team / Testimonials
├── services.html     ← All 6 service types
├── pricing.html      ← Pricing tiers, rebates, FAQ
├── contact.html      ← Contact form
├── package.json
├── css/
│   └── style.css     ← All styles
└── js/
    ├── components.js ← Shared nav + footer (auto-injected)
    └── main.js       ← Animations, forms, interactions
```

## Run Locally

```bash
npm start
# → http://localhost:3000
```

Or:
```bash
npm run dev
# → http://localhost:3000 (auto-opens browser)
```

Requires Node.js: https://nodejs.org

## Deploy to GitHub Pages

1. Create a new GitHub repo
2. Push all files to the `main` branch
3. Go to Settings → Pages → Source → main / root
4. Live at: `https://yourusername.github.io/your-repo-name`

## Customise

- **Phone number**: search `(604) 619-8009` in `js/components.js`
- **Business name**: search `AuraVolt` in all files
- **Colors**: edit CSS variables at top of `css/style.css`
- **Contact form**: wire up to [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/)
