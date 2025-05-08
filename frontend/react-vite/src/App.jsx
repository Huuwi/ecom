import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './components/nav-bar/Nav';
import Banner from './components/banner/Banner';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

//test
import ItemTemplate from './components/items/ItemTemplate';

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Banner />
        <Body />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
