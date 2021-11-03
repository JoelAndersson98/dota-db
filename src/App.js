import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Items from './components/Items';
import Item from './components/Item'
// Style
import GlobalStyle from './GlobalStyle';

const App = () => (
  <Router>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hero/:heroId' element={<Hero/>} />
          <Route path='/items' element={<Items/>} />
          <Route path='/item/:itemId' element={<Item/>} />
        </Routes>
    <Footer/>
    <GlobalStyle/>
  </Router>
)

export default App;
