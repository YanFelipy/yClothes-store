import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <ModalContext.Provider value={{ isLoginOpen, openLogin, closeLogin, isRegisterOpen, openRegister, closeRegister }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => useContext(ModalContext);