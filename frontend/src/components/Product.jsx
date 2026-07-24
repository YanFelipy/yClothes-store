import React from 'react'
import styles from './Product.module.css'


import DeleteIcon from '../assets/img/icons/deleteIcon.svg?react'
import EditIcon from '../assets/img/icons/editIcon.svg?react'
import ShCart from '../assets/img/icons/shCart.svg?react'

const Product = ({product, imgProduct, productCategory, ProductName, previousPrice,
     ProductPrice, isAdmin, onDelete, onEdit, }) => {

  return (
   <div className={styles.product_trending}>
   
     <div className={styles.product_details}>
      
   {isAdmin && (
        <div className={styles.adminActions}>


          <button onClick={() => onEdit(product._id)}>
            <EditIcon className={styles.editIcon}  />
          </button>

          <button onClick={() => onDelete(product._id)}>
             <DeleteIcon className={styles.deleteIcon} />
            </button>

        </div>
      )}


   

      <div className={styles.boxProdImg}>
   <img src={imgProduct} className={styles.product_Image}/>

      </div>
     <div className={styles.prices}>

      <div className={styles.nameAndCategory}>
     <p className={styles.product_name}>{ProductName}</p>
     <h3 className={styles.product_category}>| ({productCategory})</h3>

      </div>
     { previousPrice && <span className={styles.product_prevPrice}>{previousPrice} $  </span> }
     <p className={styles.product_price}>{ProductPrice} $</p>

     </div>
   
     </div>
     <div className={styles.product_button}>
       <button className={styles.btn_view}> View</button>
       <button className={styles.btn_add}><ShCart className={styles.shCart} /> </button>
     </div>
   </div>
  )
}

export default Product