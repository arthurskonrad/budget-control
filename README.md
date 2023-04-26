<p align="center"><img src="./public/favicon.png" alt="Logo Budget Control" width="100" height="100"></p>

<p align="center">
  <a href="https://codecov.io/gh/arthurskonrad/budget-control"><img src="https://img.shields.io/codecov/c/github/arthurskonrad/budget-control" alt="Coverage Status"></a>
  <a href="https://github.com/arthurskonrad/budget-control/blob/master/LICENSE"><img src="https://img.shields.io/github/license/arthurskonrad/budget-control" alt="License"></a>
</p>

# budget-control

This is a learning project of a web application for personal finance management built with Vue.js, Pinia, MongoDB, Node, and Express.

## Description

Budget Control is a web application that allows users to manage their personal finances. The application is built with Vue.js, a popular JavaScript framework for building user interfaces, and uses Pinia for state management. The backend is powered by Node.js and Express, and data is stored in a MongoDB database.

With Budget Control, users can create and manage their budgets, track their expenses, and view reports of their spending habits. The application is designed to be intuitive and easy to use, with a clean and modern user interface.

## Features

- User authentication and authorization
- Create and manage budgets
- Track expenses and income
- View reports of spending habits
- Responsive and mobile-friendly design

## Technologies Used

- MongoDB
- Express.js
- Vue.js
- Node.js
- Pinia

## Project Setup

### Dependencies

- Docker (with compose)
- VScode (optional)
- Browser

### Copy docker override example

```bash
cp docker-compose.override.example.yml docker-compose.override.yml
```

### Copy env example

```bash
cp .env.example .env
```

### Build and start the applitcation with:

```bash
docker compose up -d
```

### Exec the app container:

```bash
docker compose exec app bash
```

### Inside the app container:

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

<!-- ### Type-Check, Compile and Minify for Production

```bash
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```bash
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```bash
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```bash
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```bash
npm run lint
``` -->

### Exec the server container

```bash
docker compose exec server bash
```

### Run node server index

```bash
node index.js
```

## Acknowledgments

This project was developed as a learning exercise by Arthur Schulle Konrad. Made with love ❤

## License

This project is licensed under the MIT License.
