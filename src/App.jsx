import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import Home from './pages/Home';
import SiteSettings from "./SiteSettings";

function App() {

  return (
    <>
      <BrowserRouter>
        <SiteSettings />
        <Header />
        <main className='page-main'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
