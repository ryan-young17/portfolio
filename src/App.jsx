// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import CodeProjects from './pages/CodeProjects';
import DesignProjects from './pages/DesignProjects';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route
               path='/'
               element={<Home />}
            />
            <Route
              path='/portfolio'
              element={<Home />}
            />
            <Route 
              path='/about'
              element={<About />}
            />
            <Route 
              path='/portfolio/web-development'
              element={<CodeProjects />}
            />
            <Route
              path='/portfolio/graphic-design'
              element={<DesignProjects />}
            />
            <Route
              path='/resume'
              element={<Resume />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
