import React from 'react'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import Home from './pages/home'
import Create from './pages/create'
import Update from './pages/update'
import Detail from './pages/detail'
import { Route, Routes } from 'react-router'
import NotFound from './pages/404'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Home />
      <Create />
      <Update />
      <Detail /> */}
      <Footer />
    </div>
  )
}

export default App