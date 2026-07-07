import {React, useState} from 'react'
import styles from './FormCreateProducts.module.css'

//Assets

import imgSelect from '../assets/img/icons/ImgSelect.svg'
import imgsSelect from '../assets/img/icons/ImgsSelect.svg'

const FormCreateProducts = () => {
const [category, setCategory] = useState("")


  return (
    <div>
      <div className={styles.titleCreate}>

      <h2>Create Product: <span>{category} </span>Category</h2>
      </div>

      <div className={styles.boxCreate}>

        <div className={styles.productDetails}>
          <h3>Product Details</h3>
          <form className={styles.formCreateProd}>
            <div className={styles.triLabel}>
              <label className={styles.labelName}>
                <span className={styles.inputText}>Product Name :</span>
                <input type="text" placeholder='Product Name' />
              </label>

              <label>
                <span className={styles.selText}>Product Category :</span>
                <select name="selectedCategory" onChange={(e)=> setCategory(e.target.value)} >
                  <option value="Mens">Men's</option>
                  <option value="Woman">Woman</option>
                  <option value="Kids">Kids</option>
                </select>
              </label>

              <label>
                <span className={styles.selText}>Product Type:</span>
                <select name="selectedType" defaultValue="Select...">
                  <option value="Shirts">Shirts</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Hats">Hats</option>
                  <option value="Shorts">Shorts</option>
                </select>
              </label>

            </div>


            <div className={styles.triLabel}>
              <label>
                <span className={styles.inputName}>Product Price :</span>
                <input type="text" placeholder='Price' />
              </label>

              <label>
                <span className={styles.inputName}>Discount :</span>
                <input type="text" placeholder=' Previous Price' />
              </label>

              <label>
                <span className={styles.selText}>Product Size :</span>
                <select name="selectedCategory">
                  <option value="SM">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </select>
              </label>

            </div>

            <span>Product Images</span>

            <div className={styles.imagesLabel}>

              <label>
                <span>Thumbail Image</span>

                <div className={styles.boxSelectImg}>
                  <input className={styles.customFileUpload} type="file" />
                  <img src={imgSelect} alt="" />
                  <span> Upload image...</span>
                </div>
              </label>

              <label>
                <span>Product Sample</span>

                <div className={styles.boxSelectImg}>

                  <input type="file" multiple />
                  <img src={imgsSelect} alt="" />
                  <span> Upload images...</span>
                </div>
              </label>


            </div>

            <label className={styles.btnSubmit}>
              <input type="submit" className={styles.btnCreate} />
            </label>


          </form>
        </div>

        <div className={styles.productPreview}>
          <h3>Product Preview</h3>
        </div>

      </div>


    </div>

  )
}

export default FormCreateProducts