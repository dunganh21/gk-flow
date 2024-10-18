import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/Nav'
import { AppRouter } from './Router'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
