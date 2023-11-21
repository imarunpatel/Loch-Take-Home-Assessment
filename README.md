# Loch Take Home Assessment

This project aims to provide an engaging and responsive landing page for Loch. The design is meticulously crafted to capture user attention, and the functionalities are designed to enhance the user experience. Whether you are accessing the page from a desktop or a mobile device, Loch promises a seamless and visually appealing experience.


## Features

- Responsive design for desktop and mobile browsers
- Testimonials at the bottom with draggable functionality
- Infinite carousel for notification settings
- Responsive textbox on hover and click
- Email validation with error message
- Redirect to [https://app.loch.one/welcome](https://app.loch.one/welcome) after submission

## Technologies Used

- React
- TailwindCss


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
