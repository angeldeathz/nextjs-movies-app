This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Development Tools

This project includes several development tools to ensure code quality and consistency:

### Husky

[Husky](https://typicode.github.io/husky/) is used to manage Git hooks:

- **Pre-commit hook** (`.husky/pre-commit`): Runs `lint-staged` to check and fix code before commits
- **Pre-push hook** (`.husky/pre-push`): Runs TypeScript type checking and build verification before pushing

### Lint-staged

[lint-staged](https://github.com/lint-staged/lint-staged) runs linters and formatters on staged files. Configuration file: `.lintstagedrc`

- For `*.{js,jsx,ts,tsx}` files: runs `cspell`, `eslint --fix`, and `prettier --write`
- For `*.{json,css,md}` files: runs `cspell` and `prettier --write`

### ESLint

[ESLint](https://eslint.org/) is configured for code linting. Configuration file: `eslint.config.mjs`

- Uses Next.js ESLint config (core-web-vitals and TypeScript)
- Includes `eslint-plugin-simple-import-sort` for import sorting
- Custom rules for unused variables and console statements

### Prettier

[Prettier](https://prettier.io/) is used for code formatting. Configuration files:

- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files and directories to ignore

Includes `prettier-plugin-tailwindcss` for Tailwind CSS class sorting.

### cspell

[cspell](https://cspell.org/) is used for spell checking. Configuration file: `cspell.config.json`

- Supports English and Spanish (`@cspell/dict-es-es`)
- Includes dictionaries for TypeScript, Node.js, and npm
- Custom word list for project-specific terms

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run type-check` - Run TypeScript type checking
- `npm run spell-check` - Run cspell on project files

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
