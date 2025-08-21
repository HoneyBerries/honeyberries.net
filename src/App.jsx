import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
// Global styles are imported in main.jsx via index.css

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        {/* Global gradient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/40"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-200/40 to-teal-200/30 blur-3xl"></div>
          <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-blue-200/35 to-indigo-200/25 blur-3xl"></div>
          <div className="absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-gradient-to-tr from-violet-200/30 to-purple-200/20 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-gradient-to-bl from-pink-200/25 to-rose-200/20 blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="pt-16">{/* offset for sticky navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
