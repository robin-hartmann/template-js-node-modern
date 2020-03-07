# 📄 template-node-js-modern

Project Template for creating Node.js apps with modern JavaScript - transpiled down to ES2015

## ⭐ Features

- Code in modern JavaScript
  - Transpiled down to `ES2015`
- Automatic code checking with ESLint
- Automatic code formatting and fixing with Prettier
- Launch and debug modern JavaScript code using `ts-node`
- Built-in tasks
- Integration with Visual Studio Code
  - Matching settings
  - Launch and debug code
  - Task definitions
  - Extension recommendations

## 🛠️ Development

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

- [Node.js](https://nodejs.org) - JavaScript run-time environment
  - After installing it, use `npm i` in the project's root folder to install all dependencies

#### Visual Studio Code Extensions

This project is intended to be used with Visual Studio Code and the following extensions are recommended:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint JavaScript into VS Code
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter using prettier

### 🚀 Built-in Tasks

This project uses npm scripts for running tasks:

```bash
# lint the project using eslint
npm run lint

# remove the generated folder
npm run clean

# build the project
# (includes clean and lint)
npm run build

# build the project without linting
# (includes clean)
npm run build-only

# run modern JavaScript code using ts-node
npm run start:js
# or just
npm start

# run generated JavaScript code using node
# (does NOT include build)
npm run start:js-transpiled

# publish the project
# (includes build)
npm publish
```

VS Code tasks for `lint`, `build`, `build-only`, `start:js` and `start:js-transpiled` are also included.
