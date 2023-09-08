# Figma plugin to export compressed images 

This README file provides an overview of the project's structure, available scripts, dependencies, and other relevant information.

## Project Information

- **Name**: Figma images compressor
- **Version**: 1.0.0
- **Description**: Figma plugin to export compressed images .
- **Author**: Abdeldjalil
- **License**: MIT License

## Project Structure

This project has the following directory structure:

- `plugin-src`: Contains TypeScript source code for the plugin.
- `ui-src`: Contains TypeScript source code for the user interface.
- `dist`: Contains the bundled output files.
- `node_modules`: Contains project dependencies.

## Scripts

This project includes several npm scripts that facilitate various tasks. You can run these scripts using the `npm run` command followed by the script name. Here are the available scripts:

- **test**: Run TypeScript compilation and build tasks.

  ```
  npm run test
  ```

- **format**: Format the project code using Prettier.

  ```
  npm run format
  ```

- **tsc**: Run TypeScript compilation for the main and UI source code.

  ```
  npm run tsc
  ```

- **tsc:main**: Compile the main source code using TypeScript.

  ```
  npm run tsc:main
  ```

- **tsc:ui**: Compile the UI source code using TypeScript.

  ```
  npm run tsc:ui
  ```

- **tsc:watch**: Watch and compile TypeScript source code for both main and UI.

  ```
  npm run tsc:watch
  ```

- **build**: Build the project, minifying the output.

  ```
  npm run build
  ```

- **build:main**: Build the main source code using esbuild.

  ```
  npm run build:main
  ```

- **build:ui**: Build the UI using Vite and esbuild.

  ```
  npm run build:ui
  ```

- **build:watch**: Watch and build both the main and UI source code.

  ```
  npm run build:watch
  ```

- **dev**: Concurrently run TypeScript compilation, project builds, and Vite development server.
  ```
  npm run dev
  ```

## Dependencies

This project has both runtime and development dependencies. Here are the key dependencies:

- **Runtime Dependencies**:

  - react: React library.
  - react-dom: React DOM library.

- **Development Dependencies**:
  - @figma/plugin-typings: Figma plugin typings.
  - @types/react: TypeScript type definitions for React.
  - @types/react-dom: TypeScript type definitions for React DOM.
  - @vitejs/plugin-react-refresh: Vite plugin for React hot module replacement.
  - concurrently: Utility to run multiple npm scripts concurrently.
  - esbuild: Fast JavaScript bundler and minifier.
  - prettier: Code formatter.
  - typescript: TypeScript compiler.
  - vite: Next-generation front-end tooling.
  - vite-plugin-singlefile: Vite plugin for generating a single HTML file.
  - vite-svg-loader: Vite plugin for loading SVG files.

## Getting Started

To get started with this project, follow these steps:

1. Clone the project repository.
2. Navigate to the project directory.
3. Install project dependencies using `npm install`.
4. Run `npm run dev`

Feel free to customize and extend this project to suit your specific needs.

If you have any questions or need further assistance, please refer to [the official Figma documentation](https://www.figma.com/plugin-docs/) .

Happy coding!
