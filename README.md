# Enhanced Vite React TypeScript Template

This template includes built-in detection for missing CSS variables between your Tailwind config and CSS files.

## Features

- **CSS Variable Detection**: Automatically detects if CSS variables referenced in `tailwind.config.cjs` are defined in `src/index.css`
- **Enhanced Linting**: Includes ESLint, Stylelint, and custom CSS variable validation
- **Shadcn/ui**: Pre-configured with all Shadcn components
- **Modern Stack**: Vite + React + TypeScript + Tailwind CSS

## Available Scripts

```bash
# Run all linting (includes CSS variable check)
npm run lint

# Check only CSS variables
npm run check:css-vars

# Individual linting
npm run lint:js    # ESLint
npm run lint:css   # Stylelint
```

## CSS Variable Detection

The template includes a custom script that:

1. **Parses `tailwind.config.cjs`** to find all `var(--variable)` references
2. **Parses `src/index.css`** to find all defined CSS variables (`--variable:`)
3. **Cross-references** them to find missing definitions
4. **Reports undefined variables** with clear error messages

### Example Output

When CSS variables are missing:
```
❌ Undefined CSS variables found in tailwind.config.cjs:
   --sidebar-background
   --sidebar-foreground
   --sidebar-primary

Add these variables to src/index.css
```

When all variables are defined:
```
✅ All CSS variables in tailwind.config.cjs are defined
```

## How It Works

The detection happens during the `npm run lint` command, which will:
- Exit with error code 1 if undefined variables are found
- Show exactly which variables need to be added to your CSS file
- Integrate seamlessly with your development workflow

This prevents runtime CSS issues where Tailwind classes reference undefined CSS variables.

---

## System Functions ✅

This section explains the main responsibilities and structure of the project so contributors and maintainers can quickly understand the system.

### Overview
- **Purpose:** A Vite + React + TypeScript template pre-configured with Tailwind CSS, shadcn/ui components, and CSS variable validation.
- **Primary focus:** Provide a developer-friendly boilerplate that prevents runtime CSS issues and includes a large suite of UI primitives.

### Architecture & Folder Structure 📁
- `src/` — Application source code
  - `components/layout/` — Page-level layout components (e.g., `Navbar`, `Hero`, `Footer`, `Pricing`, `Contact`, `AboutAndWhy`, `ProcessAndCTA`)
  - `components/ui/` — Reusable UI primitives and library wrappers (buttons, cards, dialogs, inputs, etc.) provided as modular components
  - `hooks/` — Custom hooks (e.g., `use-mobile.tsx`)
  - `lib/` — Reusable utilities (e.g., `utils.ts`)
  - `main.tsx`, `App.tsx` — App entry and root component

### Key System Functions 🔧
- **CSS Variable Detection**: Parses `tailwind.config.cjs` and `src/index.css` to find missing CSS variable definitions and fails lint when variables are undefined.
- **UI Component Library**: Centralized, consistent UI primitives under `components/ui/` to maintain design system and accessibility standards.
- **Page Layouts**: `components/layout/` contains composable sections that together form the public-facing site pages.
- **Build & Dev**: Vite handles dev server and production builds; TypeScript + ESLint + Stylelint ensure type and style quality.

### Scripts & Commands ⚙️
- `npm run dev` — Start Vite dev server
- `npm run build` — Create production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Run all lint checks (includes CSS variable check)

### How to Extend / Add Features 💡
1. Add or update UI components under `components/ui/` and add stories/tests as needed.
2. For new page sections, create components under `components/layout/` and compose them in `App.tsx`.
3. If introducing new CSS vars referenced by Tailwind, add their definitions to `src/index.css` to avoid lint errors.

> Tip: Run `npm run lint` locally before opening PRs to catch missing CSS variables and style issues early.

---

## System Purpose 🎯

This repository is a developer-focused starter template built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**. Its goals are:

- Provide a polished, accessible set of UI primitives via `components/ui/` to accelerate feature development.
- Prevent runtime styling issues by validating CSS variables used in `tailwind.config.cjs` against definitions in `src/index.css`.
- Ship a compact default layout and pattern library in `components/layout/` to bootstrap public-facing pages and marketing sites.

---

## Quickstart 🚀

Prerequisites:
- Node.js (recommended LTS) or Bun
- npm or yarn

Quick setup:
```bash
# Install deps
npm install

# Start dev server
npm run dev

# Run linters and checks
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Detailed Project Structure 📁

- `src/` — Application source
  - `components/layout/` — Page composition (Hero, Navbar, Footer, Pricing, Contact, etc.)
  - `components/ui/` — Reusable UI primitives and wrappers for Radix/shadcn components
  - `hooks/` — Custom hooks (e.g., `use-mobile.tsx`)
  - `lib/` — General utilities (e.g., `utils.ts`)
  - `main.tsx`, `App.tsx` — App entry points
- `public/` — Static assets
- `tailwind.config.cjs` — Tailwind theme and variable references
- `src/index.css` — Core global styles and CSS variable definitions

---

## Component Responsibilities & Best Practices 🔧

- Layout components (`components/layout/`): compose smaller UI primitives into page sections. Keep them as presentation-focused (no heavy business logic).
- UI primitives (`components/ui/`): small, focused, and documented. Prefer composition over deep prop branching and export well-typed props.
- Hooks: pure logic that can be reused across components. Keep side-effects explicit and testable.
- Utilities: stateless helpers and formatting functions used across the app.

Tips:
- Add a short JSDoc comment and TypeScript types to every exported component.
- Keep styles co-located where practical and leverage utility-first Tailwind classes for layout.

---

## CSS Variable Detection (how it works and how to run) 🧭

- The script referenced in `package.json` (`scripts/check-css-variables.js`) parses `tailwind.config.cjs` for `var(--...)` references and checks that each variable is defined in `src/index.css` (`--variable:`).
- Run the check manually with:

```bash
npm run check:css-vars
```

Note: If `scripts/check-css-variables.js` is not present in your local copy, the package.json entry is a placeholder; you can implement a script that uses a simple RegExp or a small Node.js parser to compare the two files. If you'd like, I can add a working script to `scripts/`.

---

## Linting & Type Checking ✅

- `npm run lint` runs TypeScript checks, ESLint, Stylelint, and CSS variable checks.
- Use `npm run lint:js`, `npm run lint:css`, or `npm run lint:types` to run parts individually.

> Tip: Add a pre-commit hook (husky) to run `npm run lint` to catch issues before PRs.

---

## Testing & CI 🔁

- This template doesn't include a test framework by default. Recommended additions:
  - Unit tests: Jest + React Testing Library or Vitest
  - E2E: Playwright or Cypress
  - Add GitHub Actions for `push`/`pull_request` to run linting and tests

---

## Deployment ✈️

- Deploy static builds to platforms like Vercel, Netlify, or GitHub Pages. The `npm run build` output is ready to be served as static files.

---

## Troubleshooting & FAQ ❓

- Missing variables in Tailwind classes: Run `npm run check:css-vars` and add missing `--variable:` entries to `src/index.css`.
- ESLint errors: Run `npm run lint:js` and follow the rule messages; auto-fix where available (`--fix`).
- Build errors: Ensure Node version is compatible and dependencies are installed; run `npm run build` locally to reproduce.

---

## Contributing 🤝

- Fork → Feature branch → Open PR
- Add or update tests for new behavior
- Run `npm run lint` and ensure CI is green before requesting review

---

If you'd like, I can add a contributor quickstart (`CONTRIBUTING.md`) and/or implement the missing `scripts/check-css-variables.js` in a follow-up change.