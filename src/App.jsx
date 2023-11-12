import './App.css'
import Header from './Components/Header'
import HomePage from './Components/Home/HomePage'
import Login from './Components/Auth/Login';
import Signin from './Components/Auth/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import Product from './Components/product/Product';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/home/search/:searchtext' element={<Product/>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
