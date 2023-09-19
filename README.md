# Figma plugin to export compressed images 

This GitHub repository serves as a demonstration of creating a Figma plugin using TypeScript, ReactJS, and Vite. 

For a live demonstration, you can visit the following link: https://www.figma.com/community/plugin/1284557222547216612/image-minifire

## Project Information

- **Name**: Figma images compressor
- **Version**: 1.0.0
- **Description**: Figma plugin to export compressed images
- **Author**: Abdeldjalil
- **License**: MIT License

## Project Structure

This project has the following directory structure:

- `plugin-src`: Contains the Figma api codebase which is a sort of the backend of a Figma plugin.
- `ui-src`: Contains the user interface codebase of the plugin.
- `dist`: Contains the bundled output files.

## Scripts

This project includes several npm scripts that facilitate various tasks. You can run these scripts using the `pnpm run` command followed by the script name. Here are the available scripts:

- **build**: Build the project, minifying the output.

  ```
  pnpm run build
  ```

- **dev**: Concurrently run TypeScript compilation, project builds, and Vite development server.
  ```
  pnpm run dev
  ```

## Getting Started

To get started with this project, follow these steps:

1. Clone the project repository.
2. Navigate to the project directory.
3. Install project dependencies using `pnpm install`.
4. Run `pnpm run dev`
5. Open Figma and add a new plugin by importing **manifest.json**

Feel free to customize and extend this project to suit your specific needs.

If you have any questions or need further assistance, please refer to [the official Figma documentation](https://www.figma.com/plugin-docs/) .

Happy coding!
