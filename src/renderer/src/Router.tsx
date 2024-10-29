import { Route, Routes } from 'react-router-dom'
import Contact from './pages/contact'
import ContactDef from './pages/contact-def'
import Home from './pages/home'
import Template from './pages/template'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/template" element={<Template />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact-def" element={<ContactDef />} />
    </Routes>
  )
}
