import React from 'react'
import styles from './FormEditProducts.module.css'

const FormEditProducts = () => {
  return (
    <div className={styles.boxEdit}>
    <h2>Edit Product: <span>(Category)</span></h2>
      <div className={styles.formEditBox}>
        <form>
<label className={styles.dualLabel}></label>
<label className={styles.dualLabel}></label>
<label className={styles.imageslabel}></label>
        </form>
      </div>
    </div>
  )
}

export default FormEditProducts