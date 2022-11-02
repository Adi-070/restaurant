import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import About from './Pages/About/About'
import Delivery from './Pages/Delivery/Delivery'
import Contact from './Pages/Contact/Contact'


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      
    <Route path="/"element={<Home/>} />
    <Route path="/menu"element={<Menu/>} />
    <Route path="/about"element={<About/>} />
    <Route path="/delivery"element={<Delivery/>} />
    <Route path="/contact"element={<Contact/>} />

    </Routes>
    <Footer />

    </div>
  );
}

export default App;
