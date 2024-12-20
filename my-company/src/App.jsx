
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavBar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
