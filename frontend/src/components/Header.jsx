// Hooks 
import { useModals } from '../context/ModalContext'


// Navigation
import { Link } from 'react-router'

//styles
import styles from './Header.module.css'

//assets
import logo from '../assets/img/icons/logo_yc.png'
import heart from '../assets/img/icons/heart-svgrepo-com.svg'
import cart from '../assets/img/icons/shCart.svg'
import accountsvg from '../assets/img/icons/user-round-svgrepo-com.svg'
//components
import Search from './Search'
import UserMenu from './UserMenu'
import AdminMenu from './AdminMenu'

//Context
import { useAuthValue } from '../context/AuthContext'


const Header = () => {
    let userLogged = false
    const { openLogin } = useModals();
    const { user } = useAuthValue()



    return (
        <header>

            <nav className={styles.navigations}>
                <div className={styles.box_logo}>
                    <Link to="/">
                        <img src={logo} alt="logo" className={styles.logotype} />
                    </Link>
                </div>
                <ul className={styles.ulcategories}>
                    <li>
                        <a href="">MEN</a>
                    </li>

                    <li>
                        <a href="">WOMEN</a>
                    </li>

                    <li>
                        <a href="">KIDS</a>
                    </li>
                </ul>
                <div className={styles.search_box}>
                    <Search />
                </div>
                <ul className={styles.uloptionsuser}>

                    <Link to="/sh-cart">
                        <li className={styles.item_optuser}>
                            <div className={styles.box_img}>
                                <img src={cart} />
                            </div>
                            <a href="">CART</a>
                        </li>
                    </Link>

                    <li className={styles.item_optuser}>
                        <div className={styles.box_img}>
                            <img src={heart} />
                        </div>
                        <a href="">FAVS</a>
                    </li>

                    <li className={styles.item_optuser}>
                        <div className={styles.box_img}>
                            <img src={accountsvg} />

                        </div>


                        {user && user.role === 'user' && <UserMenu />}
                        {user && user.role === 'admin' && <AdminMenu />}
                        {user == null &&
                            <button className={styles.btSignIn} onClick={openLogin}>
                                SIGN-IN
                            </button>

                        }

                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header