import { React, useState, useEffect } from 'react'
import styles from './FormCreateProducts.module.css'

//Assets

import imgSelect from '../assets/img/icons/ImgSelect.svg'
import imgsSelect from '../assets/img/icons/ImgsSelect.svg'
import genShirt from '../assets/img/product/generic-shirt.png'

const FormCreateProducts = () => {
  const [category, setCategory] = useState("")
  const [imgProd, setImgProd] = useState(null)
  const [prodName, setProdName] = useState("")
  const [prodPrice, setProdPrice] = useState("")
    const [previousPrice, setPreviousPrice] = useState("")

  //to prevent memory leak
  useEffect(() => {
    return () => {
      if (imgProd) URL.revokeObjectURL(imgProd);
    };
  }, [imgProd]);


  return (
    <div>
      <div className={styles.titleCreate}>

        <h2>Create Product: <span>{category} Category </span></h2>
      </div>

      <div className={styles.boxCreate}>

        <div className={styles.productDetails}>
          <h3>Product Details</h3>
          <form className={styles.formCreateProd}>
            <div className={styles.triLabel}>
              <label className={styles.labelName}>
                <span className={styles.inputText}>Product Name :</span>
                <input type="text" placeholder='Product Name' value={prodName} maxLength={20} onChange={(e) => setProdName(e.target.value)} />

              </label>

              <label>
                <span className={styles.selText}>Product Category :</span>
                <select name="selectedCategory" value={category} onChange={(e) => setCategory(e.target.value)} >
                  <option value="Men's">Insert category</option>
                  <option value="Men's">Men's</option>
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
                <input type="text" placeholder='Price' value={prodPrice} maxLength={10} onChange={(e) => setProdPrice(e.target.value)} />
              </label>

              <label>
                <span className={styles.inputName} >Prev. Price (discount) :</span>
                <input type="text" placeholder=' Previous Price' name={previousPrice} value={previousPrice} onChange={(e) => setPreviousPrice(e.target.value)} />
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
                  <input className={styles.customFileUpload} type="file" onChange={(e) => setImgProd(URL.createObjectURL(e.target.files[0]))} />
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
              <input type="submit" className={styles.btnCreate} value={"Create Product"} />
            </label>


          </form>
        </div>

        <div className={styles.boxProductPreview}>
          <h3>Product Preview</h3>
          <div className={styles.prevProduct}>
            <div className={styles.imageProduct}>
              {imgProd ? <img src={imgProd} alt='' /> : <img src={genShirt}></img>}
            </div>
            {category ? <h3 className={styles.product_category}>{category}</h3> : <h3>(Insert a category)</h3>}
            {prodName ? <p className={styles.product_name}>{prodName}</p> : <p>(Insert Name) </p>}
            {previousPrice? <span className={styles.product_prevPrice}>{previousPrice} $</span> : ""}
            {prodPrice ? <span className={styles.product_price}>{prodPrice} $</span> : <p>(Insert Price) </p>}
            <div className={styles.product_button}>
              <button className={styles.btn_add}> View</button>
              <button className={styles.btn_view}> add to cart</button>
            </div>
          </div>
        </div>

      </div>


    </div>

  )
}

export default FormCreateProducts