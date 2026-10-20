import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LegalRights from './pages/LegalRights'
import FindLawyer from './pages/FindLawyer'
import LegalAid from './pages/LegalAid'
import Articles from './pages/Articles'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal-rights" element={<LegalRights />} />
        <Route path="/find-lawyer" element={<FindLawyer />} />
        <Route path="/legal-aid" element={<LegalAid />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App