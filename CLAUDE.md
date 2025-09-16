# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Next.js 15 task management application with TypeScript using the App Router architecture. The main application code is located in `my-app/`.

### Key Directories
- `my-app/src/app/` - Next.js App Router pages and layouts
- `my-app/src/app/(main)/` - Main application route group with sidebar layout
- `my-app/src/components/SideMenu/` - Sidebar navigation components
- `my-app/public/` - Static assets (SVG icons)

### Architecture Notes
- Uses App Router with route groups: `(main)` contains pages with sidebar layout
- Root layout (`src/app/layout.tsx`) sets up fonts (Geist Sans, Geist Mono) and global metadata
- Main layout (`src/app/(main)/layout.tsx`) implements a sidebar layout with flex layout using SideMenu component
- TypeScript path mapping: `@/*` maps to `./src/*`

### Component Structure
- **SideMenu** (`src/components/SideMenu/SideMenu.tsx`) - Main sidebar container with branding
- **NavList** (`src/components/SideMenu/NavList/NavList.tsx`) - Navigation list component managing task categories
- **NavItem** (`src/components/SideMenu/NavList/NavItem/NavItem.tsx`) - Individual navigation item with active state styling
- Navigation uses react-icons (FontAwesome) for iconography

## Development Commands

All commands should be run from the `my-app/` directory:

```bash
# Development server with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm run start

# Lint code with ESLint
npm run lint
```

## Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **Icons**: react-icons (FontAwesome)
- **Bundler**: Turbopack (enabled for dev and build)
- **Linting**: ESLint with Next.js config

## Configuration Files

- `next.config.ts` - Next.js configuration (minimal setup)
- `tsconfig.json` - TypeScript configuration with Next.js plugin
- `eslint.config.mjs` - ESLint flat config with Next.js rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS
- `tailwindcss` - Configured through PostCSS plugin

## Development Notes

- Project uses Turbopack for faster builds and development
- ESLint is configured with Next.js Core Web Vitals and TypeScript rules
- Tailwind CSS is set up through PostCSS with the v4 plugin
- Font optimization uses Next.js built-in Google Fonts support
- Navigation state management uses Next.js usePathname hook for active link styling