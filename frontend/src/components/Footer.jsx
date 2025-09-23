//styles
import styles from './Footer.module.css'

//assets
import logo from '../assets/img/icons/logo_yc.png'
import linkedinIcon from '../assets/img/icons/linkedin-svgrepo-com.svg'
import instaIcon from '../assets/img/icons/instagram-svgrepo-com.svg'
import facebookIcon from '../assets/img/icons/facebook-svgrepo-com.svg'

import paypal from '../assets/img/icons/paypal-3-svgrepo-com.svg'
import visa from '../assets/img/icons/visa-svgrepo-com.svg'
import mastercard from '../assets/img/icons/mastercard-svgrepo-com.svg'
const Footer = () => {
    return (
        <footer>

            <div className={styles.container_ft}>

                <div className={styles.box_logo_and_info}>



                    <div className={styles.box_logo}>
                        <img src={logo} alt="logo" className={styles.logotype} />
                        <h3> yClothes</h3>
                    </div>

                    <div className={styles.box_info}>
                        <ul className={styles.list_info}>
                            <li>
                                Contact : (21) XXXX-XXXX
                            </li>
                            <li>
                                Frederich Faulhaber Avenue
                                 - 1290 ,<br/> ZIP CODE:  21760-002
                            </li>
                            <li>
                                <a>Work with us</a>
                            </li>
                        </ul>
                    </div>


                    <div className={styles.box_info}></div>
                </div>

                <div className={styles.navigation_ft}>
                    <ul className={styles.ulcategories}>

                        <li>
                            <a href="">HOMEPAGE</a>
                        </li>

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
                </div>

                <div className={styles.socials}>
                    <div className={styles.box_icon}>
                        <img src={facebookIcon} alt="" />
                    </div>
                    <div className={styles.box_icon}>
                        <img src={linkedinIcon} alt="" />
                    </div>
                    <div className={styles.box_icon}>
                        <img src={instaIcon} alt="" />
                    </div>
                </div>

                <div className={styles.box_card_rules}>

                    <div className={styles.we_accept}>

                        <h4>
                            We accept :
                            
                        </h4>
<div className={styles.box_brands_cards}>
                                <ul className={styles.accept_list}>
                                    <li className={styles.card}>
                                        <img src={mastercard} alt="" />
                                    </li>

                                   <li className={styles.card}>
                                        <img src={visa} alt="" />
                                    </li>

                                    <li className={styles.card}>
                                        <img src={paypal} alt="" />
                                    </li>
                                </ul>
                            </div>

                    </div>

                    <div className={styles.warranty}>
                        <p>
                            You always have 30 days to decide wheather you want to keep or return the order. The return policy varies depending on ther country in wich the purchase was made.
                        </p>
                    </div>


                </div>



            </div>


        </footer>
    )
}

export default Footer