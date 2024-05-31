import Navigation from './components/Navigation'
import FormPage from './views/FormPage'
import HomePage from './views/HomePage'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/contacto"
          element={<FormPage />}
        />
      </Routes>
    </div>

  )
}

export default App
