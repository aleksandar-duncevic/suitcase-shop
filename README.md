# Suitcase E-Shop
A front-end e-commerce project for browsing and displaying travel suitcases.  
Built using TypeScript, SCSS, and a modular component structure.

## Setup Instructions

### Install dependencies
```
npm install
```

### Run the project
```
npm run dev
```
This command runs three processes in parallel:
- Compiles SCSS files from src/scss into CSS in dist/css
- Compiles TypeScript files from src/ts into JavaScript files in dist/js
- Starts a local development server using live-server

The application will open at:

http://127.0.0.1:8080/src/index.html  

## Code Quality

This project uses ESLint for TypeScript and Stylelint for SCSS to ensure consistent code quality.

### Run lint checks
```
npm run lint
```

### Automatically fix issues
```
npm run lint:fix
```

### Notes
No additional global dependencies are required  
All styles must be written in SCSS and compiled into CSS  
All TypeScript is compiled into JavaScript before running in the browser  
Do not edit files in dist/ folder, they are auto-generated  
Code quality is enforced using ESLint and Stylelint  

### Final Project Implementation Checklist  
20/64