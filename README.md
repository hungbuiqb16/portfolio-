# FAQ Public

FAQ Public Page for the Ekiten AI FAQ system, built with React, TypeScript and Vite.

## Tech Stack

| Area             | Technology            |
| ---------------- | --------------------- |
| Framework        | React 19              |
| Language         | TypeScript 6          |
| Build tool       | Vite 8                |
| State management | Zustand 5             |
| Linting          | ESLint 10             |
| Formatting       | Prettier              |
| Git hooks        | Husky + lint-staged   |

## Requirements

Make sure the following are installed before setting up the app:

- **Node.js** `>= 20.19` (Node 22 LTS recommended — required by Vite 8)
- **npm** `>= 10` (bundled with Node)
- **Git** (required for the Husky pre-commit hooks)

## Installation

```bash
# 1. Clone the repository
git clone git@lab.nitrotech.asia:ekiten-ai-faq/faq-public.git
cd faq-public

# 2. Install dependencies (also sets up Husky Git hooks via the "prepare" script)
npm install

# 3. Start the development server
npm run dev
```

The app will be available at the URL printed by Vite (default: `http://localhost:5174`).

## Available Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                 |
| `npm run build`   | Type-check (`tsc -b`) and build for production     |
| `npm run preview` | Preview the production build locally               |
| `npm run lint`    | Run ESLint across the project                      |

## Project Structure

```
faq-public/
├── public/              # Static assets served as-is (favicon, ...)
├── src/
│   ├── assets/          # Imported assets (images, icons)
│   ├── components/
│   │   ├── common/      # Shared, feature-agnostic components
│   │   └── ui/          # Presentational UI components
│   ├── constants/       # App-wide constant values
│   ├── enums/           # Shared enums
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layout wrappers
│   ├── pages/           # Route-level pages
│   ├── router/          # Routing configuration
│   ├── services/        # API clients / data services
│   ├── store/           # Zustand stores (global state)
│   ├── theme/           
│   ├── types/           # Shared TypeScript types
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Root component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
└── vite.config.ts       # Vite configuration
```

## Path Alias

Imports can use the `@/` alias, which maps to the `src/` directory:

```ts
import Button from '@/components/ui/Button'
import { useAuthStore } from '@/store/useAuthStore'
```

## Code Quality

A Husky **pre-commit** hook runs `lint-staged` on staged files:

- `*.{js,jsx,ts,tsx}` → `eslint --fix` then `prettier --write`
- `*.json`, `*.{css,scss,sass,less}` → `prettier --write`

Commits that fail linting are blocked until the issues are resolved.
