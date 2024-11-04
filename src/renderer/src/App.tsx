import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/sidebar'
import { AppRouter } from './Router'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-48 p-6 overflow-auto">{<AppRouter />}</main>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
