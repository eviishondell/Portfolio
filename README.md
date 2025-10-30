# Evolone Portfolio Website

A React portfolio website built with Vite and Tailwind CSS.

## Setup Instructions

### 1. Install Dependencies

First, make sure you have Node.js installed (version 16 or higher recommended).

Then, in your project directory, run:

```bash
npm install
```

### 2. Run Development Server

Start the development server:

```bash
npm run dev
```

This will start the development server, usually at `http://localhost:5173`

### 3. Build for Production

To create a production build:

```bash
npm run build
```

### 4. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
.
├── index.html              # Entry HTML file
├── package.json            # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── src/
    ├── main.jsx           # React entry point
    ├── Portfolio.jsx      # Main portfolio component
    └── index.css          # Global styles with Tailwind
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Customization

- Edit `src/Portfolio.jsx` to modify the portfolio content
- Update the carousel slides in the `carouselSlides` array
- Replace placeholder images with actual images
- Customize colors and styles in `tailwind.config.js`
