import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/sidebar'
import { AppRouter } from './Router'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <AppRouter />
          </main>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
