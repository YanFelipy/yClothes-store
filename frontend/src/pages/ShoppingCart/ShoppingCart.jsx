//ASSETS

// STYLES
import styles from './ShoppingCart.module.css'
import Sneaker from '../../assets/img/product/sneaker.avif'
const ShoppingCart = () => {
    return (
        <section className={styles.containersh}>
            <div className={styles.box_cartCheckout}>
                <div className={styles.textBox}>
                    <h2>YOUR SHOPPING CART : <span>2</span></h2>
                </div>

                <div className={styles.boxitemsAndPrices}>

                    <div className={styles.cartItems}>
                        <div className={styles.productCart}>
                            <div className={styles.productDetails}>
                                <div className={styles.imageProduct}>
                                    <img src={Sneaker} alt="" />
                                    .
                                </div>
                                <div className={styles.descProduct}>
                                    <h3>HANDBALL SPECIAL SHOE</h3>
                                    <span>Sneakers, <span>Size - 39</span> </span>

                                    <p className={styles.priceItem}>
                                        200$
                                    </p>
                                </div>


                            </div>
                            <div className={styles.ProdQuantity}>

                            </div>
                        </div>
                    </div>
                    



                    <div className={styles.checkout}>

                        <div className={styles.checkoutPrices}>
                            <p>Order Amount : <span>200$</span></p>
                            <p>Delivery : <span>20$</span></p>
                                                        </div>
                                                        <div className={styles.totalPrice}>
                                                            <p>Total price: <span>220 $</span> </p>
                                                        </div>
                            
                            

                    </div>

                </div>



            </div>


        </section>
    )
}

export default ShoppingCart