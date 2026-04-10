
import './App.css'

//Global Components
import Header from './components/Header'
import Footer from './components/Footer'
import ModalRegister from './components/RegisterModal'
import LoginModal from './components/LoginModal'

//Router
import {BrowserRouter } from 'react-router'
import RoutePages from './routes/RoutePages'

const App = () => {
  return (
    <BrowserRouter>
 <Header/>
 <RoutePages />
 <LoginModal />
 <ModalRegister />
 <Footer />
    </BrowserRouter>
  )

}
export default App
