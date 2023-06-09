import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Home/Home";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
