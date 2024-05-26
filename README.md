

https://dragitpro-aoxf.vercel.app/
# Drag-and-Drop To-Do List with TypeScript, Tailwind CSS, and DND

This project is a simple to-do list application built using TypeScript, Tailwind CSS for styling, and a drag-and-drop (DND) package for enabling drag-and-drop functionality.

## Features

- Create tasks by typing in the input field and pressing enter.
- Drag and drop tasks to reorder them.
- Mark tasks as completed or delete them.

## Technologies Used
- TypeScript
- Tailwind CSS 
- - [DND Package] - (Link to the DND package you used)


### Prerequisites

- Node.js installed
- Package manager (npm or yarn) installed







### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/drag-drop-todo.git
cd drag-drop-todo
Install dependencies:
bash
Copy code
npm install
Running the Application
Run the development server:

bash
Copy code
npm run dev
The application will be accessible at http://localhost:3000.

Building for Production
To build the application for production:

bash
Copy code
npm run build
Running Tests
Add information about any test suites or commands for running tests.

Usage
Explain how to use the application, including creating tasks, dragging and dropping tasks, marking tasks as completed, etc.

Contributing
If you'd like to contribute to this project, please follow the standard GitHub fork/pull request workflow.

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
