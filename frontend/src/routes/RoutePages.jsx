//RouteConfig
import {Routes, Route} from 'react-router'

//Pages

import HomePage from '../pages/Homepage/Homepage.jsx'
import NewCollections from '../pages/newCollections/newCollections.jsx'

const RoutePages = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>} />
        <Route path='/new-collections' element={<NewCollections/>} />
   </Routes>
  )
}

export default RoutePages