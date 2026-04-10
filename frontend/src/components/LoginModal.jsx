//HOOKS
import { useRef, useEffect } from 'react';
import { useModals } from '../context/ModalContext';

// STYLES
import styles from './LoginModal.module.css'


//ASSETS
import logo from '../assets/img/icons/logo_yc.png'


const LoginModal = () => {

    //open modal

    const { isLoginOpen, closeLogin , openRegister } = useModals();
    const dialogRef = useRef(null);


    useEffect(() => {
        const modal = dialogRef.current;
        if (isLoginOpen) {
            modal?.showModal();
        } else {
            modal?.close();
        }
    }, [isLoginOpen]);




    if (!isLoginOpen) return null;


    //login 

    const LoginUser = (e) => {
        e.preventDefault()
    }



    return (
        <dialog
            ref={dialogRef}
            className={styles.modal}
            onClick={(e) => e.target === dialogRef.current && closeLogin()}
        >

            <div className={styles.boxModal} onClick={(e) => e.stopPropagation()}>

                {/* INRO-MODAL */}

                <div className={styles.introModal}>
                    <img src={logo} alt="" />
                    <h2>Sign-in</h2>
                    <span>For a better experience</span>
                </div>

                {/* FORMULARY */}

                <div className={styles.formLogin}>
                    <form onSubmit={LoginUser}>

                        <label className={styles.labels}>
                            <span>Email :</span>
                            <input type="email" />
                        </label>

                        <label className={styles.labels}>
                            <span>Password :</span>
                            <input type="password" />
                        </label>



                    </form>
                    <div className={styles.submitForm}>
                        <button>
                            Login
                        </button>
                    </div>

                </div>

                {/* OPTIONS */}

                <div className={styles.modalOptions}>
                    <a href=""> Forgot password?</a>
                    <a 
                        href="#" 
                        onClick={(e) => { 
                            e.preventDefault(); 
                            closeLogin(); 
                            openRegister(); 
                        }}
                    > 
                        Don't have an account? Sign up!
                    </a>
                </div>


            </div>
        </dialog>
    )
}

export default LoginModal