import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'rxdb-hooks'
import Sidebar from './components/sidebar'
import { initLocalDb, LocalDatabase } from './infrastructure/model'
import { AppRouter } from './Router'
import { Toaster } from './components/ui/toast/toaster'

const App = () => {
  const [db, setDb] = useState<LocalDatabase | undefined>()

  useEffect(() => {
    // Add flag to prevent double initialization
    initLocalDb().then((localDb) => {
      setDb(localDb)
    })
  }, [])

  return (
    <div>
      <Provider db={db}>
        <BrowserRouter>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-48 p-6 overflow-auto">{<AppRouter />}</main>
          </div>
          <Toaster />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
