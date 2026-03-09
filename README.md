# 🔍 Devfinder — GitHub User Search App

A responsive GitHub user search application built with React and TypeScript. Users can search for any GitHub profile by username, view detailed information, and switch between light and dark themes.

## ✨ Technologies

- **React 18** — Component-based UI with hooks
- **TypeScript** — Type safety across components, props and API responses
- **Vite** — Fast development and build tooling
- **CSS Modules** — Scoped component styles
- **CSS Custom Properties** — Design token system for theming
- **Storybook** — Component documentation and isolated development
- **Vitest + Playwright** — Automated interaction testing via Storybook play functions
- **GitHub REST API** — Live user data fetching

## 🚀 Features

- Search GitHub users by username with live API integration
- Light and dark theme switcher with system preference detection
- Fully responsive layout for mobile (375px), tablet (768px) and desktop (1440px)
- Loading state with custom animation while fetching data
- Graceful error handling — "No results" state when user is not found
- Null-safe rendering — all optional profile fields (bio, location, blog, twitter, company) display a styled fallback when unavailable
- Hover and focus states for all interactive elements
- Accessible markup — semantic HTML, aria-labels, visually hidden labels

## 🧩 The Process

The project started as a plain React + Vite setup. After building the initial components (Header, SearchBar) and defining the design system with CSS custom properties, I migrated the entire codebase to TypeScript to unlock better tooling and prepare for Storybook integration.

Once TypeScript was in place, I installed and configured Storybook — the main challenge here was making the theme system work inside Storybook's iframe-based canvas. I built a custom ThemeDecorator that applies the `.dark` class to a wrapper div rather than to `:root`, which allowed light and dark stories to render independently in the Docs view without conflicting with each other.

From that point I followed a component-driven workflow: build the component, write its stories, then integrate it into the app.

### Workflow

1. **Foundation** — Vite setup, CSS reset, design tokens (spacing, typography, colors), global layout
2. **TypeScript migration** — added type declarations, migrated all files to `.tsx`, typed props and state
3. **Storybook setup** — configured `main.ts` and `preview.tsx`, built custom ThemeDecorator, solved dark mode isolation in Docs view
4. **Header + ThemeToggle** — built and documented with stories and play functions to verify toggle behavior
5. **SearchBar** — built with controlled input, error state, and stories covering all states including play functions for form interaction
6. **ProfileCard** — built incrementally: basic structure → ProfileStats → ProfileLinks with icons → null handling → date formatting
7. **GitHub API integration** — typed the API response, connected the fetch in App, lifted state up, handled loading and error states
8. **UI components** — extracted NoResults and Loader into a shared UI folder, added loading state with minimum display time using `Promise.all`
9. **Testing** — added play functions across all interactive components to verify behavior automatically

## 📚 What I Learned

- **Component-driven development** — building and documenting components in isolation with Storybook before integrating them into the app helped catch visual and behavioral issues early
- **Design token architecture** — separating raw color values from semantic tokens made theme switching clean and scalable
- **TypeScript in React** — typing props, API responses and state made the codebase more predictable and easier to refactor
- **Storybook play functions** — combining visual documentation with automated interaction tests in the same file reduced the overhead of maintaining separate test files
- **Lifting state up** — managing user data and error state in App and passing it down via props kept components focused and reusable
- **Unidirectional data flow** — SearchBar only calls onSearch, it has no knowledge of the API — this separation made testing and refactoring straightforward

## ✨ Reflections

This project pushed me beyond recreating a design. Configuring Storybook with a custom theme system, writing typed components from scratch and maintaining a clean commit history forced me to think about architecture and developer experience, not just the final result. The biggest challenge was making Storybook's Docs view render light and dark stories independently — solving it deepened my understanding of how CSS custom properties and the DOM interact.

## 🙏 Acknowledgments

- Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6)
- Data from [GitHub REST API](https://docs.github.com/en/rest/users/users)
- AI generated video loader [Pika](https://pika.art)