import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../../pages/NavBar/NavBar'
import IntroPage from '../../pages/IntroPage/IntroPage'
import CartPage from '../../pages/CartPage/CartPage'
import { useContext, useEffect } from 'react'
import GlobalContext from '../global/globalContext'

export const Router = () => { 

  return (
    <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route exact path={"/"} element={<IntroPage />} />
        <Route exact path={"/carrinho"} element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )

}