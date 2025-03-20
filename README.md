# Repo1: Vega Project - Data Visualization with Vega-Lite

## Overview
This project is a React + TypeScript + Redux application that creates interactive data visualization charts using the **Vega-Lite** specification. The application includes:
- **Bar Chart**
- **Scatter Plot**

## Tech Stack
- **Frontend:** React, TypeScript, Redux
- **Charting Library:** Vega-Lite

## Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/repo1-vega-project.git
cd repo1-vega-project
npm install
```

### Running the Application
To start the development server:
```sh
npm start
```
This will launch the application at `http://localhost:3000/`.

### Building for Production
To create a production-ready build:
```sh
npm run build
```

## Features
- Interactive **Bar Chart** and **Scatter Plot** built with Vega-Lite.
- Uses **Redux** for state management.
- TypeScript support for improved development experience.

## Vega-Lite Documentation
To understand how Vega-Lite specifications work, refer to:
- [Vega-Lite Documentation](https://vega.github.io/vega-lite/)
- [Vega Editor](https://vega.github.io/editor/#/examples/vega-lite/bar)

## Folder Structure
```
repo1-vega-project/
├── public/            # Static files
├── src/               # Source code
│   ├── components/    # React components for charts
│   │   ├── BarChart.tsx
│   │   ├── ScatterPlot.tsx
│   ├── App.tsx        # Main application
│   ├── index.tsx      # Entry point
│   ├── styles/        # CSS files
├── .gitignore         # Git ignore file
├── package.json       # Project dependencies
├── README.md          # Project documentation
└── tsconfig.json      # TypeScript configuration
```
