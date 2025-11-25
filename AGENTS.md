# AGENTS.md

This file contains custom instructions for AI coding agents working on this project.

## Overview

This is Carlos Cuesta's personal website built with:

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm 10.21.0
- **Node Version**: 22
- **Content**: MDX
- **Testing**: Jest with React Testing Library
- **Deployment**: Vercel
- **CI**: GitHub Actions

## Architecture

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Shared application components.
- `src/posts/`: Blog posts written in [MDX](https://mdxjs.com).
- `src/utils/`: Utility functions.
- `src/types/`: TypeScript type global definitions.
- `src/mocks/`: MSW mocks for offline development.
- `.github/dependabot.yml`: Dependabot configuration.
- `.github/workflows`: CI Configuration (GitHub Actions)

## Development Workflow

### Commands

| Command               | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `pnpm install`        | Install dependencies                                  |
| `pnpm run dev`        | Run development server                                |
| `pnpm run test:lint`  | Run linters and formatters                            |
| `pnpm run test:unit`  | Run unit tests                                        |
| `pnpm run tscheck`    | Run TypeScript type check                             |
| `pnpm run test:watch` | Run unit tests in watch mode                          |
| `pnpm run test`       | Run lint, format, type-check and unit tests together. |

### Best practices

- Use **TypeScript** for all code.
- Never use `any` types when writing TypeScript.
- Follow existing **ESLint** and **Prettier** configurations
- Components should use functional components with hooks
- Prefer default exports over named exports for components.
- Ensure quality standards when doing changes by running `lint`, `tscheck` and `test:unit` scripts.

#### Testing

- Write tests for new components and utilities
- Colocate tests in a `__tests__` folder next to the actual tested code.
- Use React Testing Library for component tests
- Maintain or improve code coverage (tracked via Codecov)

#### Styles

- Use **Tailwind CSS** utility classes
- Responsive design is important (mobile-first approach)
- Support both light and dark themes (using next-themes)

## Common tasks

### Adding a Blog Post

1. Create MDX file in `src/posts/`
2. Add required frontmatter (title, date, description, etc.)
3. Use existing posts as reference

## Git workflow

- Commit messages should be clear and descriptive and use [gitmoji](https://gitmoji.dev)
- Husky runs pre-commit hooks (linting, formatting)
- CI runs on GitHub Actions (check `.github/workflows/`)
- Keep commits focused and atomic

## Resources

- [Repository](https://github.com/carloscuesta/carloscuesta.me)
- [Live site](https://carloscuesta.me)
