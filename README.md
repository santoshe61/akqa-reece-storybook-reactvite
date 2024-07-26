# React + TypeScript + Vite

> Uses node: ^20.15.1 (LTS) and npm: ^10.7.0


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## To start storybook
```bash
npm start
```

## To start vite
```bash
npm run dev
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Setup guide from scratch
#### Create Vite app with React + Typescript template
```bash
npx create-vite@latest akqa-reece-storybook-reactvite --template react-ts

cd akqa-reece-storybook-reactvite

npm install
```

#### Add and init storybook
```bash
npx storybook@latest init
npm install -D @types/storybook__react 
```

#### Add and init tailwind css
```bash
npm install -D tailwindcss
npx tailwindcss init
```

#### Install ESLint and Prettier for code formating and linting
```bash
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
```

#### Init shadcn
```bash
npx shadcn-ui@latest init
```

> To add shadcn component
```bash
npx shadcn-ui@latest add {COPONENT_NAME}
```

## Tech Stack + Tools ref
- [Shadcn - Component collection](https://ui.shadcn.com/docs/components/accordion)
- [Storybook](https://storybook.js.org/docs/get-started/frameworks/react-vite?renderer=react)
- [Vite](https://vitejs.dev/guide/)
- [Tailwind](https://tailwindcss.com/docs/guides/vite)
- [React](https://react.dev/learn/tutorial-tic-tac-toe)