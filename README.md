# Project template

# Suitcase E-Shop

## Setup Instructions

### Install dependencies
```
npm install
```

### Run the project
```
npm run dev
```
This command run three processes in parallel:
- Compiles SCSS files from src/scss into CSS in dist/css
- Compiles TypeScript files from src/ts into JavaScript files in dist/js
- Starts a local development server using live-server

The application will automatically open in your browser at:

http://127.0.0.1:8080/src/index.html

### Notes
No additional tools are required  
Do not edit files in dist/ folder, they are auto-generated  
All styles must be written in SCSS and compiled into CSS  
All TypeScript is compiled into JavaScript before running in the browser  