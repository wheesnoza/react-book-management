# React book management

A simple project made in React with the purpose of learning.

## How

Install the dependencies.

```bash
pnpm install
```

or

```bash
npm install
```

## Dependencies

### Devtools

- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [husky](https://github.com/typicode/husky)

### Mock api

- [msw](https://mswjs.io/)

In order to focus on the frontend I decided to use an easy to implement mock api.

### Data fetching

- [swr](https://swr.vercel.app/)

### Form management

- [react-hook-form](https://react-hook-form.com/)

### Form data validation

- [yup](https://github.com/jquense/yup)

### Component stylyng

- [emotion](https://emotion.sh/docs/introduction)

### UI Framework

- [mui](https://mui.com/)

### i18n

- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)

### Global error handling

- [react-error-boundary](https://github.com/bvaughn/react-error-boundary)

### Global state management

- [react-redux](https://react-redux.js.org/)

### Routes management

- [react-router-dom](https://reactrouter.com/en/v6.3.0)

### Event handling

- [rxjs](https://rxjs.dev/)

Mainly used to manage global alerts.

### Utilities

- [date-fns](https://date-fns.org/)
- [lodash](https://lodash.com/)
- [uuid](https://github.com/uuidjs/uuid)

## Directory structure

```
.
├── public
├── src // Core
│   ├── adapters // Server api data adapters.
│   ├── assets // Images, etc.
│   ├── components // Shared components.
│   ├── guards // Route guards.
│   ├── hooks // Custom hooks
│   ├── locales // i18n configurations and translations files.
│   ├── mocks // Mock api configurations and mock data.
│   ├── models // Entity and data models.
│   ├── pages // App pages.
│   ├── redux // Redux states.
│   ├── services // App services. Fetching service, alert service, etc.
│   ├── styled-components
│   ├── themes // Global mui theme.
│   ├── utilities // Custom utilities.
│   ├── App.tsx
│   ├── main.tsx
│   ├── Reset.css
│   └── vite-env.d.ts
├── index.html
├── pnpm-lock.yaml
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── README.md
└── vite.config.ts
```
