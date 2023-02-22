import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Jeans from './Jeans'
import Login from './Login'
import Men from './Men'
import Women from './Women'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<Men />} />
            <Route path='/jeans' element={<Jeans />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            
        </Routes>
    </div>
  )
}

export default AllRoutes;