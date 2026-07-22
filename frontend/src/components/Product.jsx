import React from 'react'
import styles from './Product.module.css'

const Product = ({imgProduct, productCategory, ProductName, previousPrice,
     ProductPrice, isAdmin, onDelete, onEdit  }) => {
  return (
   <div className={styles.product_trending}>
   
     <a className={styles.product_details}>
   {isAdmin && (
        <div className="admin-actions">
          <button onClick={() => onEdit(product._id)}>Editar</button>
          <button onClick={() => onDelete(product._id)}>Excluir</button>
        </div>
      )}

      <div className={styles.boxProdImg}>
   <img src={imgProduct} className={styles.product_Image}/>

      </div>
     <h3 className={styles.product_category}>{productCategory}</h3>
     <p className={styles.product_name}>{ProductName}</p>
     { previousPrice && <span className={styles.product_prevPrice}>{previousPrice} </span> }
     <p className={styles.product_price}>{ProductPrice}</p>
   
     </a>
     <div className={styles.product_button}>
       <button className={styles.btn_add}> View</button>
       <button className={styles.btn_view}> add to cart</button>
     </div>
   </div>
  )
}

export default Product