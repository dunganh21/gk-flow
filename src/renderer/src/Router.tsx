import { Route, Routes } from 'react-router-dom'
import Contact from './pages/contact'
import ContactDef from './pages/contact-edit'
import Home from './pages/home'
import Template from './pages/template'
import ContactEntry from './pages/contact-entries'
import { ContactEntryEditPage } from './pages/contact-entry-edit'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/template" element={<Template />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:id" element={<ContactDef />} />
      <Route path="/contact/:id/entries" element={<ContactEntry />} />
      <Route path="/contact/:id/entries/:entryId" element={<ContactEntryEditPage />} />
    </Routes>
  )
}
