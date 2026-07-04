import React from 'react'
import styles from './FormCreateProducts.module.css'

const FormCreateProducts = () => {
  return (
    <div className={styles.boxEdit}>
    <h2>Create Product: <span>(Category)</span></h2>
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

export default FormCreateProducts