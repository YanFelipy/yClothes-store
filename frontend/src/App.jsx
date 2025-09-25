
import './App.css'

//Global Components
import Header from './components/Header'
import Footer from './components/Footer'

//Router
import {BrowserRouter } from 'react-router'
import RoutePages from './routes/RoutePages'

const App = () => {
  return (
    <BrowserRouter>
 <Header/>
 <RoutePages />
 <Footer />
    </BrowserRouter>
  )

}
export default App
