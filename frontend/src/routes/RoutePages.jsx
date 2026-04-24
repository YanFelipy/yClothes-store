//RouteConfig
import {Routes, Route} from 'react-router'

//Pages

import HomePage from '../pages/Homepage/Homepage.jsx'
import NewCollections from '../pages/newCollections/newCollections.jsx'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.jsx'

const RoutePages = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>} />
        <Route path='/new-collections' element={<NewCollections/>} />
          <Route path='/sh-cart' element={<ShoppingCart />} />
   </Routes>
  )
}

export default RoutePages