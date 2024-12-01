
import './App.css'
import 'flowbite'
import Navbar from './components/Navbar'

import {BrowserRouter , Routes , Route } from 'react-router-dom'


// Sehifeler komponenti 
import Home from './pages/Home'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
function App() {

  return (
    <>
  <BrowserRouter>
  
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/forgot-password' element={<ForgotPassword/>} />
  </Routes>

  </BrowserRouter>
    </>
  )
}

export default App
