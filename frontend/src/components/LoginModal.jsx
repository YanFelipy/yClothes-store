

// STYLES
import styles from './LoginModal.module.css'


//ASSETS
import logo from '../assets/img/icons/logo_yc.png'


const LoginModal = () => {


    const LoginUser = (e) => {
        e.preventDefault
    }



    return (
        <dialog className={styles.containerModal}>
            <div className={styles.boxModal}>

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
                    <a href=""> Have a account? Sign in!</a>
                </div>


            </div>
        </dialog>
    )
}

export default LoginModal