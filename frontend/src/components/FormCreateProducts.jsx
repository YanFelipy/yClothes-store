import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './FormCreateProducts.module.css'

//Assets

import imgSelect from '../assets/img/icons/ImgSelect.svg'
import imgsSelect from '../assets/img/icons/ImgsSelect.svg'
import genShirt from '../assets/img/product/generic-shirt.png'

import { useAuthValue } from '../context/AuthContext'
import { uploadImage } from '../services/uploadService.jsx'

const FormCreateProducts = () => {
  const navigate = useNavigate()

  const { user, logout } = useAuthValue()

  const [isUploading, setIsUploading] = useState(false);

  const [prodName, setProdName] = useState("");
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [previousPrice, setPreviousPrice] = useState("");
  const [productSize, setProductSize] = useState("");


  const [imgProd, setImgProd] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  //to prevent memory leak
  useEffect(() => {
    return () => {
      if (imgProd) URL.revokeObjectURL(imgProd);
    };
  }, [imgProd]);



  const createProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (user.role != "admin") {

      alert("Você não tem permissão para criar produtos, fazendo logout")

      setTimeout(() => {
        logout()
      }, 2000);
    }

    setIsUploading(true);

    const MAX_FILE_SIZE = 2.5 * 1024 * 1024; // 2.5MB in bytes
    if (imgFile && imgFile.size > MAX_FILE_SIZE) {
      alert("File is too large! Maximum size is 2.5MB.");
      return;
    }

    try {

      const thumbUrl = await uploadImage(imgFile);

      let galleryUrls = [];

      if (galleryFiles && galleryFiles.length > 0) {
        galleryUrls = await Promise.all(galleryFiles.map(uploadImage));
      }


      const productData = {
        prodName,
        prodPrice: Number(prodPrice),
        previousPrice: Number(previousPrice) || null,
        quantity: null,
        category,
        productType,
        productSize,
        imageUrl: thumbUrl,
        galleryImages: galleryUrls || []
      };

      console.log(productData)

      const response = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(productData)
      });

      if (response.ok) {
        alert("Produto criado!");

        window.location.reload()
        
      }
    } catch (error) {

      console.error("Erro no processo:", error);
    } finally {
      setIsUploading(false);
    }


  };


  return (
    <div>
      <div className={styles.titleCreate}>

        <h2>Create Product: <span>{category} Category </span></h2>
      </div>

      <div className={styles.boxCreate}>

        <div className={styles.productDetails}>
          <h3>Product Details</h3>
          <form onSubmit={createProduct} className={styles.formCreateProd}>
            <div className={styles.triLabel}>
              <label className={styles.labelName}>
                <span className={styles.inputText}><span className={styles.asteristic}>*</span> Product Name :</span>
                <input type="text" placeholder='Product Name' required value={prodName} maxLength={20} onChange={(e) => setProdName(e.target.value)} />

              </label>

              <label>
                <span className={styles.selText}><span className={styles.asteristic}>*</span> Product Category :</span>
                <select name="selectedCategory" required={true} value={category} onChange={(e) => setCategory(e.target.value)} >
                  <option value="">Insert category</option>
                  <option value="Men's">Men's</option>
                  <option value="Woman">Woman</option>
                  <option value="Kids">Kids</option>
                </select>
              </label>

              <label>
                <span className={styles.selText}><span className={styles.asteristic}>*</span> Product Type:</span>
                <select required name="selectedType" value={productType} onChange={(e) => setProductType(e.target.value)}>
                  <option value="">Insert type</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Hats">Hats</option>
                  <option value="Shorts">Shorts</option>
                </select>
              </label>

            </div>


            <div className={styles.triLabel}>
              <label>
                <span className={styles.inputName}><span className={styles.asteristic}>*</span> Product Price :</span>
                <input type="number" placeholder='Price' required value={prodPrice} min={0.00} max={1000.00} step={0.01} maxLength={10}  onChange={(e) => setProdPrice(e.target.value)} />
              </label>

              <label>
                <span className={styles.inputName} >Prev. Price (discount) :</span>
                <input type="number" placeholder=' Previous Price' name={previousPrice} value={previousPrice} min={0.00} max={1000.00} step={0.01} maxLength={10}  onChange={(e) => setPreviousPrice(e.target.value)} />
              </label>

              <label>
                <span className={styles.selText}> <span className={styles.asteristic}>*</span> Product Size :</span>
                <select name="selectedSize" value={productSize} onChange={(e) => setProductSize(e.target.value)} required>
                  <option value="">Insert size</option>
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
                <span><span className={styles.asteristic}>*</span> Thumbail Image</span>

                <div className={styles.boxSelectImg}>
                  <input required className={styles.customFileUpload} accept="image/*" type="file" onChange={(e) => { setImgProd(URL.createObjectURL(e.target.files[0])); setImgFile(e.target.files[0]); }} />
                  <img src={imgSelect} alt="" />
                  <span> Upload image...</span>
                </div>
              </label>

              <label>
                <span>Product Sample</span>

                <div className={styles.boxSelectImg}>

                  <input type="file" multiple accept="image/*" name={previousPrice} onChange={(e) => setGalleryFiles(Array.from(e.target.files))} />
                  <img src={imgsSelect} alt="" />
                  <span> Upload images...</span>
                </div>
              </label>


            </div>
            <div><span className={styles.asteristic}>(*) Required fields</span></div>

            <label className={styles.btnSubmit}>
              <input type="submit" className={styles.btnCreate} disabled={isUploading} value={isUploading ? "Uploading..." : "Create Product"} />
            </label>


          </form>
        </div>

        <div className={styles.boxProductPreview}>
          <h3>Product Preview</h3>
          <div className={styles.prevProduct}>
            <div className={styles.imageProduct}>
              {imgProd ? <img className={styles.newImage} src={imgProd} alt='' /> : <img src={genShirt}></img>}
            </div>
            {category ? <h3 className={styles.product_category}>{category}</h3> : <h3>(Insert a category)</h3>}
            {prodName ? <p className={styles.product_name}>{prodName}</p> : <p>(Insert Name) </p>}
            {previousPrice ? <span className={styles.product_prevPrice}>{previousPrice} $</span> : ""}
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