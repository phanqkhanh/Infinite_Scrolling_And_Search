import { FC } from 'react'
import './assets/styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { AppProvider } from './contexts/MyContext'

export type QueryConfig = {
  name: string
}
const App: FC = () => {
  return (
    <div className='app'>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}

export default App
