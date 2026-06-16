//HOOKS
import { useRef, useEffect } from 'react';
import { useModals } from '../context/ModalContext';
import { userLoginSchema } from '../validations/userValidation'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useToast } from '../context/ToastContext';
// STYLES
import styles from './LoginModal.module.css'


//ASSETS
import logo from '../assets/img/icons/logo_yc.png'


const LoginModal = () => {
    //notifications
    const { showSuccess, showError } = useToast();

    //states from form
    const { register, handleSubmit,
        formState: { errors } } = useForm({ resolver: yupResolver(userLoginSchema) });

    //open modal and close modal
    const { isLoginOpen, closeLogin, openRegister } = useModals();
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

    const LoginUser = async (data) => {
        console.log(data)

        try {
            const response = await fetch("http://localhost:4000/api/users/login", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

             const resData = await response.json();

            if (response.ok) {
                showSuccess(resData.message)
                closeLogin()
            }

        } catch (error) {
          
                showError(resData.message)
                closeLogin()
          
        }
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
                    <form onSubmit={handleSubmit(LoginUser)}>

                        <label className={styles.labels}>
                            <span>Email :</span>
                           <input {...register("email")}/>
                        </label>

                        <label className={styles.labels}>
                            <span>Password :</span>
                            <input {...register("password")}/>
                        </label>



                    <div className={styles.submitForm}>
                        <button type='submit'>
                            Login
                        </button>
                    </div>
                    </form>

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