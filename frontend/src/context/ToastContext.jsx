import { createContext, useContext } from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    
    const showSuccess = (message) => {
        toast.success(message, { position: "top-center" });
    };

    const showError = (message) => {
        toast.error(message, { position: "top-center" });
    };

    return (
        <ToastContext.Provider value={{ showSuccess, showError }}>
            {children}
           
                   </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);