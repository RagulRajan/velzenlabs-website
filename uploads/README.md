# Velzen Labs — Marketing Website

Static one-page marketing website for Velzen Labs, AI workflow automation for modern enterprises.

## Stack
- Plain HTML5
- Tailwind CSS (via CDN)
- Inter + JetBrains Mono fonts (Google Fonts)
- Inline SVG for animated 3D isometric hero visual

## Project Structure
```
velzenlabs-website/
├── index.html          # Main homepage (single-page site)
├── assets/             # Logo, favicon, icons go here
├── images/             # OG images, screenshots, photos
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## Local Preview
Just open `index.html` in any browser — no build step needed.

Or run a quick local server:
```bash
npx serve .
# or
python3 -m http.server 8000
```

## TODO Before Launch
- [ ] Replace `91XXXXXXXXXX` (search file) with real WhatsApp number
- [ ] Replace `hello@velzenlabs.com` with real email
- [ ] Replace `+91-XXXXX-XXXXX` in footer with real phone
- [ ] Add real logo image to `/assets/logo.png` and replace the "V" div in nav and footer
- [ ] Add favicon to `/assets/favicon.ico`
- [ ] Add OG image to `/images/og-image.png` (1200x630px) for WhatsApp/social link previews
- [ ] Update meta description and OG tags in <head>
- [ ] Connect dropdown menu links to real pages or sections
- [ ] Add Google Analytics or Plausible tracking script

## Deploy to Vercel
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import the GitHub repo
3. Framework preset: "Other" (it's a plain static site)
4. Build command: leave empty
5. Output directory: leave as `.` (root)
6. Deploy
7. Add custom domain in Vercel Settings → Domains → enter velzenlabs.in (or .com)
8. Vercel gives you DNS records → add them in Hostinger DNS panel:
   - A record: @ → 76.76.21.21
   - CNAME record: www → cname.vercel-dns.com
9. Wait 10 mins for DNS propagation → live!

## Brand Tokens (for future development)
- Primary gradient: `linear-gradient(135deg, #6366F1, #8B5CF6, #A78BFA)`
- CTA gradient (pink-purple): `linear-gradient(135deg, #8B5CF6, #EC4899)`
- Background: `#0A0A14`
- Text primary: `#FAFAFA`
- Text secondary: `#9CA3AF`
- Border: `rgba(139, 92, 246, 0.12)`
- Glass card bg: `rgba(139, 92, 246, 0.04)`
- Fonts: Inter (body), JetBrains Mono (accent)

## Notes for Antigravity
This is a single-file build for speed. When you're ready to expand:
- Consider migrating to Next.js or Astro for routing (separate pages for solutions, blog, case studies)
- Move Tailwind from CDN to a proper build (better performance + custom config)
- Extract reusable components (nav, footer, service card)
- Add Framer Motion for advanced scroll animations
- Add a contact form with WhatsApp/email backend
