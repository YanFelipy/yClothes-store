// Hooks 


// Navigation
import {Link} from 'react-router'

//styles
import styles from './Header.module.css'

//assets
import logo from '../assets/img/icons/logo_yc.png'
import heart from '../assets/img/icons/heart-svgrepo-com.svg'
import cart from '../assets/img/icons/shopping-cart-01-svgrepo-com.svg'
import accountsvg from '../assets/img/icons/user-round-svgrepo-com.svg'
//components
import Search from './Search'



const Header = (modalLoginEvent) => {
    let userLogged = false
    
     return (
   <header>
    
    <nav className={styles.navigations}>
    <div className={styles.box_logo}>
        <Link to="/">
<img src={logo}  alt="logo" className={styles.logotype} />
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
    <li className={styles.item_optuser}>
         <div className={styles.box_img}>
        <img src={cart}  />
        </div>
        <a href="">CART</a>
    </li>

 <li className={styles.item_optuser}>
     <div className={styles.box_img}>
            <img src={heart}  />
        </div>
        <a href="">FAVS</a>
    </li>

 <li className={styles.item_optuser}>
      <div className={styles.box_img}>
      <img src={accountsvg}  />
      </div>
      
      {userLogged ? <a href="">ACCOUNT</a> : 
      
        <button onClick={modalLoginEvent}>
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