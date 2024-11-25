# Medical Appointment for Pacients with Zustand

This project is a easy simulation to attend patients into a enviroment about to wait for a medical appointment.

## Project Setup

The project was created using Vite with the following configuration:

Configuration
```bash
npm create vite@latest
√ Project name: ... pacientes-zustand
√ Select a framework: » React
√ Select a variant: » TypeScript + SWC
```

## Package to use in this project

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i react-hook-form ---> https://react-hook-form.com/
npm i uuid --> ID unicos to use temporal
npm i --save-dev @types/uuid --> Types
```

## Zustand 
State global 

```bash
npm i zustand --> https://www.npmjs.com/package/zustand
```

## Alerts
```bash
npm i react-toastify --->https://fkhadra.github.io/react-toastify/introduction/
```

#### Add to project

```bash
import { ToastContainer } from 'react-toastify' App.tsx
```


## Package Tailwind CSS

[![Tailwind Docs](https://img.shields.io/badge/Docs-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/docs/installation)

Change configuration on tailwind.config.js
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
For index.ccs add to the next code
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
