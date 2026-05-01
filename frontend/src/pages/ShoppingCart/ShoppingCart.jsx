//ASSETS
import paypal from '../../assets/img/icons/paypal-3-svgrepo-com.svg'
import visa from '../../assets/img/icons/visa-svgrepo-com.svg'
import mastercard from '../../assets/img/icons/mastercard-svgrepo-com.svg'

// STYLES
import styles from './ShoppingCart.module.css'
import Sneaker from '../../assets/img/product/sneaker.avif'
const ShoppingCart = () => {
    return (
        <>
        <section className={styles.containersh}>
            <div className={styles.box_cartCheckout}>
                <div className={styles.textBox}>
                    <h2>YOUR SHOPPING CART : <span>1</span></h2>
                </div>

                <div className={styles.boxitemsAndPrices}>

                    <div className={styles.cartItems}>
                        <div className={styles.productCart}>
                            <div className={styles.productDetails}>
                                <div className={styles.imageProduct}>
                                    <img src={Sneaker} alt="" />
                                    
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




                    <div className={styles.checkoutAndPayMethods}>

    <div className={styles.checkout}>
                        <div className={styles.checkoutPrices}>
                            <div className={styles.checkoutLabel}>
                                <p>Order Amount : </p>
                                <span>200$</span>
                            </div>

                        <div className={styles.checkoutLabel}>
                                <p>Delivery : </p>
                                <span>20$</span>
                            </div>

                        </div>
                        <div className={styles.totalPrice}>
                            <p>Total price:  </p>
                            <span>220 $</span>
                        </div>
                        <div className={styles.submitCheckout}>
                            <button className={styles.btn_check}> Checkout</button>
                        </div>


    
</div>

<div className={styles.boxPayMethods}>
   <div className={styles.we_accept}>
   
                          
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

</div>


                    </div>

                </div>



            </div>

        </section>

<section className={styles.containerRelProducts}>
<h2>Relationed Products</h2>
<div className={styles.boxRelProducts}>

{/* PRODUCT */}
<div className={styles.relProduct}>
<img src={Sneaker} alt="" />
<h3>Men's</h3>
<p>Sneaker Nike</p>
<span>80,00 $</span>
 <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>

{/* PRODUCT */}
<div className={styles.relProduct}>
<img src={Sneaker} alt="" />
<h3>Men's</h3>
<p>Sneaker Nike</p>
<span>80,00 $</span>
 <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>

{/* PRODUCT */}
<div className={styles.relProduct}>
<img src={Sneaker} alt="" />
<h3>Men's</h3>
<p>Sneaker Nike</p>
<span>80,00 $</span>
 <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>

{/* PRODUCT */}
<div className={styles.relProduct}>
<img src={Sneaker} alt="" />
<h3>Men's</h3>
<p>Sneaker Nike</p>
<span>80,00 $</span>
 <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>

{/* PRODUCT */}
<div className={styles.relProduct}>
<img src={Sneaker} alt="" />
<h3>Men's</h3>
<p>Sneaker Nike</p>
<span>80,00 $</span>
 <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>



</div>
</section>

</>


    )
}

export default ShoppingCart