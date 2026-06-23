//RouteConfig
import { Routes, Route } from 'react-router'

//Pages

import HomePage from '../pages/Homepage/Homepage.jsx'
import NewCollections from '../pages/newCollections/newCollections.jsx'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.jsx'
import ManageProducts from '../pages/ManageProducts/ManageProducts.jsx'


// Context
import { useAuthValue } from '../context/AuthContext'
import { useState } from 'react'

const RoutePages = () => {
  const { user } = useAuthValue();


return (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/new-collections' element={<NewCollections />} />
    <Route path='/sh-cart' element={<ShoppingCart />} />

    { user && user.role === 'admin' && <Route path='/mproducts' element={ <ManageProducts /> } /> }


  </Routes>
)
}

export default RoutePages