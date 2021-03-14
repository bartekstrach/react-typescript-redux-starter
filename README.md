# React • Typescript • Redux Starter

This is a ready-to-go starter, with fully configured tools, latest libraries and my personal best practices.

I've been working over the past 2 years with similar setup and I find it very orderly yet flexible for small and mid-size projects. Re-ducks approach doesn't enforce any abstraction, it still allows to take advantage of React  - freedom of organizing stuff.

Store organized in a way that is inspired by [alexnm's re-ducks](https://github.com/alexnm/re-ducks) and transformed to Typescript.

## Libraries & framework
- React
- Typescript
- Redux - state container
- Redux Thunk - middleware for async actions
- Redux Toolkit - toolset for Redux development
- Axios - Promise based HTTP client
- Jest - testing framework

## Tools
- ESLint - static code analysis tool
- Prettier - code formatter
- Husky - git hooks
- Lint-staged - linter for staged files
- Webpack - module bundler

## Scripts
| ```npm start``` | run locally
| ```npm run build``` | build production version
| ```npm run lint``` | run static analysis
| ```npm run lint:fix``` | run static analysis and fix them
| ```npm run format``` | check where code is unformatted
| ```npm run format:fix``` | check and format code
| ```npm run test``` | run test
| ```npm run test:watch``` | run test and keep Jest running