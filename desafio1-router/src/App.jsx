import Navigation from './components/Navigation'
import FormPage from './views/FormPage'
import HomePage from './views/HomePage'
import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/' element={<FormPage />}/>
      </Routes>
      
    </>
  )
}

export default App
