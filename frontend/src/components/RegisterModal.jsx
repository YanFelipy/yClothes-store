

// STYLES
import styles from './RegisterModal.module.css'


//ASSETS
import logo from '../assets/img/icons/logo_yc.png'


const RegisterModal = () => {


    const registerUser = (e) => {
        e.preventDefault
    }



    return (
        <dialog className={styles.containerModal}>
            <div className={styles.boxModal}>

                {/* INRO-MODAL */}

                <div className={styles.introModal}>
                    <img src={logo} alt="" />
                    <h2>Sign-up</h2>
                    <span>For a better experience</span>
                </div>

                {/* FORMULARY */}

                <div className={styles.formRegister}>
                    <form onSubmit={registerUser}>


                        <div className={styles.dualLabel}>

                            <label className={styles.labels}>
                                <span>Name:</span>
                                <input type="text" />
                            </label>

                            <label className={styles.labels}>
                                <span>Last name :</span>
                                <input type="text" />
                            </label>

                        </div>
                        <label className={styles.labels}>
                            <span>Email :</span>
                            <input type="email" />
                        </label>

                        <label className={styles.labels}>
                            <span>Password :</span>
                            <input type="password" />
                        </label>

                        <label className={styles.labels}>
                            <span>Confirm Password :</span>
                            <input type="text" />
                        </label>


                    </form>
                    <div className={styles.submitForm}>
                        <button>
                            Register
                        </button>
                    </div>

                </div>

                {/* OPTIONS */}

                <div className={styles.modalOptions}>
                    <a href=""> Forgot password?</a>
                    <a href=""> Have a account? Sign in!</a>
                </div>


            </div>
        </dialog>
    )
}

export default RegisterModal