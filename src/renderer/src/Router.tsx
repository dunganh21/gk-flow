import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Template from './pages/Template'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/template" element={<Template />} />
    </Routes>
  )
}
