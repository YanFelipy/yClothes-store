// Hooks
import { ModalProvider } from './context/ModalContext'
import { ToastProvider } from './context/ToastContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


// Styles
import './App.css'

//Global Components
import Header from './components/Header'
import Footer from './components/Footer'
import ModalRegister from './components/RegisterModal'
import LoginModal from './components/LoginModal'

//Router
import { BrowserRouter } from 'react-router'
import RoutePages from './routes/RoutePages'

const App = () => {
  return (
    <>
    <ModalProvider>
      <ToastProvider  >
        <BrowserRouter>
          <Header />
          <RoutePages />
          <LoginModal />
          <ModalRegister />
          <Footer />
        </BrowserRouter>
      </ToastProvider>
    </ModalProvider>

 <ToastContainer 
              autoClose={true}
                hideProgressBar={false} 
                newestOnTop 
                closeOnClick 
                pauseOnHover 
             
            />


        </>
    
  )

}
export default App
