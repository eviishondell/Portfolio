import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio.jsx'
import Projects from './Projects.jsx'
import Publications from './Publications.jsx'
import AboutMe from './AboutMe.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)