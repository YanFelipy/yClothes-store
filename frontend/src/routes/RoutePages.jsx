//RouteConfig
import {Routes, Route} from 'react-router'

//Pages

import HomePage from '../pages/Homepage/Homepage.jsx'

const RoutePages = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>} />
   </Routes>
  )
}

export default RoutePages