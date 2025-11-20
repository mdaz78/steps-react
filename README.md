# Steps Component

A React application demonstrating a step-by-step guide component with interactive navigation. This project is part of "The Ultimate React Course 2025" and showcases fundamental React concepts including state management with hooks.

## Features

- **Step Navigation**: Navigate through a 3-step process using Previous and Next buttons
- **Visual Step Indicators**: Active step highlighting with numbered indicators
- **Toggle Visibility**: Close/open button to show or hide the steps component
- **State Management**: Uses React `useState` hook to manage step state and component visibility

## Steps

1. Learn React ⚛️
2. Apply for jobs 💼
3. Invest your new income 🤑

## Technologies

- **React** 19.2.0
- **Vite** 7.2.2
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── Steps.jsx      # Main Steps component
├── App.jsx            # Root component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## Component Details

The `Steps` component demonstrates:

- React Hooks (`useState`)
- Conditional rendering
- Event handling
- State updates with functional updates

## License

This project is part of a course and is for educational purposes.
