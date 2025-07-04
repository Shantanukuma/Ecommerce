import { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/home/Home'
import Cart from './Pages/cart/Cart'
import { useCartContext } from './context/cartContext/CartContext'
import Header from './component/header/Header'


function App() {
  const {products} = useCartContext()
  console.log(products);
  
  

  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/cart' element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
