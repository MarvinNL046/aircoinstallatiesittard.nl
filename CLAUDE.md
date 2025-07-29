# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13.5.6 website for StayCool Airco (aircoinstallatiesittard.nl), an air conditioning installation company serving the Limburg region in the Netherlands. The site is optimized for static export and deployed on Netlify.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (includes sitemap generation)
npm run build

# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Generate sitemaps manually
npm run generate-sitemaps
```

## Architecture & Key Components

### Core Stack
- **Next.js 13.5.6** with App Router (not Pages Router)
- **TypeScript** with strict mode enabled
- **Tailwind CSS** with custom design system (orange/blue theme)
- **shadcn/ui** components
- **EmailJS** for form handling (credentials in environment variables)

### Static Export Configuration
- `next.config.js` uses `output: 'export'` for static hosting
- Images are unoptimized for static export compatibility
- Trailing slashes enabled for better static hosting support

### Design System
- Primary colors: Orange (--orange-500/600) and Blue (--blue-600)
- Typography: Inter font family
- Custom CSS variables defined in `app/globals.css`
- Button styles: `.btn-primary`, `.btn-secondary`, `.btn-outline`

### Dynamic Route Generation
- **City Pages**: `app/steden/[city]/page.tsx` - Uses slugified city names from `data/steden.json`
- **Service Pages**: `app/diensten/[slug]/page.tsx` - Service details from `data/diensten.json`
- **Service-City Combinations**: `app/diensten/[slug]/[city]/page.tsx` - SEO-optimized combination pages
- **Blog Posts**: Dynamic from `data/blog-posts.tsx`
- **Knowledge Base**: Articles from `data/kennisbank.json`

### Data Sources
- `data/steden.json`: 174 cities/towns in Limburg with population data
- `data/diensten.json`: Service offerings with pricing
- `data/brands.json`: Airco brands information
- `data/blog-posts.tsx`: Blog post content and metadata

### SEO & Redirects
- **Sitemap Generation**: Pre-build script generates static sitemaps in `public/`
- **Redirects**: Netlify `_redirects` file handles URLs with spaces (e.g., "berg en terblijt" → "berg-en-terblijt")
- **Meta Tags**: Extensive keyword optimization for Limburg region
- **Structured Data**: JSON-LD schemas for local business and services

### Key Components
- `components/sections/HeroOptimized.tsx`: Hero with rotating headlines (uses min-height to prevent layout shift)
- `components/sections/product-showcase.tsx`: Product gallery with brand/category filters
- `components/layout/header.tsx`: Main navigation (not `components/header.tsx`)
- `components/sections/ContactSection.tsx`: Contact form with EmailJS integration

## Environment Variables

Required for production:
```
NEXT_PUBLIC_SITE_URL=https://aircoinstallatiesittard.nl
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_1rruujp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_rkcpzhg
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sjJ8kK6U9wFjY0zX9
```

## Deployment Notes

- Netlify configuration in `netlify.toml`
- Uses `@netlify/plugin-nextjs` for optimized deployment
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18.17.0

## Important Business Details
- **Phone**: 046 202 1430
- **Email**: info@staycoolairco.nl
- **Hours**: Mon-Thu 9-17, Fri 9-16, Sat-Sun closed (NOT 24/7)
- **Google Reviews**: 163 reviews, 4.7/5 rating
- **Service Area**: Entire Limburg province with focus on Sittard