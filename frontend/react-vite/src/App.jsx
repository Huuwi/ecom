import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './components/nav-bar/Nav';
import Banner from './components/banner/Banner';
import Body from './components/body/Body';

function App() {

  return (
    <>
      <Nav />
      <Banner />
      <Body />
    </>
  )
}

export default App
