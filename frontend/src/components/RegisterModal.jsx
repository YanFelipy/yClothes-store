import { useRef, useEffect, } from 'react';
import { useModals } from '../context/ModalContext';
import { userSchema } from '../validations/userValidation' // Importação do seu arquivo separado
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';


// STYLES
import styles from './RegisterModal.module.css'


//ASSETS
import logo from '../assets/img/icons/logo_yc.png'



const RegisterModal = () => {

    const { register,
        handleSubmit,
        formState: { errors } }
        = useForm({ resolver: yupResolver(userSchema) });

    //register 

    const registerUser = async (data) => {

        url = "http://localhost:5000/api/users/register"

        const UserData = { name, lastName, email, password }


        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(UserData)
            })

            const resData = await response.json();

            if (response.ok) {
                alert('Welcome to YClothes!');
                closeRegister(); // Fecha o modal após sucesso
            } else {
                alert(data.message || 'Erro ao cadastrar');
            }
        } catch (error) {
            console.error('Erro na conexão:', error);
            alert('Erro no servidor');
        }
    };




    //modal
    const { isRegisterOpen, closeRegister, openLogin } = useModals();
    const dialogRef = useRef(null);


    useEffect(() => {
        const modal = dialogRef.current;
        if (isRegisterOpen) {
            modal?.showModal();
        } else {
            modal?.close();
        }
    }, [isRegisterOpen]);


    if (!isRegisterOpen) return null;




    

    return (
        <dialog

            ref={dialogRef}
            className={styles.modal}
            onClick={(e) => e.target === dialogRef.current && closeRegister()}
        >


            <div className={styles.boxModal} onClick={(e) => e.stopPropagation()} >

                {/* INRO-MODAL */}

                <div className={styles.introModal}>
                    <img src={logo} alt="" />
                    <h2>Sign-up</h2>
                    <span>For a better experience</span>
                </div>

                {/* FORMULARY */}

                <div className={styles.formRegister}>
                    <form onSubmit={handleSubmit(registerUser)}>
                        <div className={styles.dualLabel}>
                            <label className={styles.labels}>
                                Name: <input {...register("name")} />
                                <p>{errors.name?.message}</p>
                            </label>

                            <label className={styles.labels}>

                                <span>Last name :</span>

                               <input {...register("lastName")} />
                               <p>{errors.lastName?.message}</p>

                            </label>
                        </div>


                        <label className={styles.labels}>
                            Email: <input type="email" {...register("email")} />
                            <p>{errors.email?.message}</p>
                        </label>

                        <label className={styles.labels}>
                            Password: <input type="password" {...register("password")} />
                            <p>{errors.password?.message}</p>
                        </label>

                        <label className={styles.labels}>
                            Confirm Password: <input type="password" {...register("confirmPassword")} />
                            <p>{errors.confirmPassword?.message}</p>
                        </label>

                        <div className={styles.submitForm}>
                            <button type='submit'>
                                Register
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
                            closeRegister();
                            openLogin();
                        }}
                    >
                        Have an account? Sign in!
                    </a>
                </div>




            </div>
        </dialog>
    )
}

export default RegisterModal