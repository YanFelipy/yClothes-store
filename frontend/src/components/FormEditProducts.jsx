import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './FormEditProducts.module.css'

//Assets

import imgSelect from '../assets/img/icons/ImgSelect.svg'
import imgsSelect from '../assets/img/icons/ImgsSelect.svg'
import genShirt from '../assets/img/product/generic-shirt.png'
import ShCart from '../assets/img/icons/shCart.svg?react'

import { useAuthValue } from '../context/AuthContext'
import { uploadImage } from '../services/uploadService.jsx'

const FormEditProducts = () => {

  //hooks
  const navigate = useNavigate()

  //context
  const { user, logout } = useAuthValue()

  // states
  const [isUploading, setIsUploading] = useState(false);
  const [prodName, setProdName] = useState("");
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [prodPrice, setProdPrice] = useState("0.00");
  const [previousPrice, setPreviousPrice] = useState("");
  const [productSize, setProductSize] = useState("");
  const [error, setError] = useState("")
  const [imgProd, setImgProd] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [isNotReady, setIsNotReady] = useState(true)

  const MAX_FILES = 5;

  //to prevent memory leak and verify fields

  useEffect(() => {
    // 1. Lógica de validação dos campos
    if (!prodName || !category || !productType || !prodPrice || !productSize || !productSize || !imgFile) {
      setError("(*) Required fields are missing");
    } else {
      setIsNotReady(false)
      setError("");
    }

    if (galleryFiles.length > MAX_FILES) {
      alert(`You can only select ${MAX_FILES} images`);

      setGalleryFiles([]);
      return;
    }

    return () => {
      if (imgProd) {
        URL.revokeObjectURL(imgProd);
      }




    };
  }, [galleryFiles, imgProd, prodName, category, productType, prodPrice, productSize]);


  const EditProduct = async (e) => {
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
      setError("File is too large! Maximum size is 2.5MB.");
      setIsUploading(false)
      return;
    }

    if (previousPrice && previousPrice <= prodPrice) {
      setIsUploading(false)
      setError("The previous price must be higher than the current price")
      return
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
  console.log(galleryFiles)

  return (
    <div>
      <div className={styles.titleEdit}>

        <h2>Edit Product: <span>{category} Category </span></h2>
      </div>

      <div className={styles.boxEdit}>

        <div className={styles.productFormDetails}>
          <h3>Product Details</h3>
          <form onSubmit={EditProduct} className={styles.formEditProd}>
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
                <input type="number" inputMode="decimal" minLength={3} pattern="^\d+\.\d{2}$" placeholder='Price' required value={prodPrice} pattern="^\d+\.\d{2}$" min={0.00} max={1000.00} step={0.01} maxLength={10} onChange={(e) => setProdPrice(e.target.value)} />
              </label>

              <label>
                <span className={styles.inputName} >Prev. Price (discount) :</span>
                <input type="number" inputMode="decimal" minLength={3} placeholder=' Previous Price' pattern="^\d+\.\d{2}$" name={previousPrice} value={previousPrice} min={0.00} max={1000.00} step={0.01} maxLength={10} onChange={(e) => setPreviousPrice(e.target.value)} />
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
                  <input required className={styles.customFileUpload} accept="image/*" type="file" onChange={(e) => { setImgProd(URL.EditObjectURL(e.target.files[0])); setImgFile(e.target.files[0]); }} />
                  {imgProd == null ? <><img src={imgSelect} alt="image thumb select" />
                    <span> Upload image...</span> </>
                    : <><img src={imgProd} alt="selected image thumb" />
                      <span> Change Image...</span> </>}
                </div>
              </label>

              <label>
                <span>Product Sample </span>

                <div className={styles.boxSelectImg}>

                  <input type="file" multiple accept="image/*" name={previousPrice} onChange={(e) => setGalleryFiles((Array.from(e.target.files)))} />

                  <img src={imgsSelect} alt="" />
                  <span> Upload images...<span className={styles.asteristic}>(max. 4)</span></span>

                </div>
              </label>

              <div className={styles.selectedImagesLabel}>

                {galleryFiles && galleryFiles.length > 0 ?
                  <>  <span>Selected Images</span>
                    <div className={styles.rollSelected}>

                      {galleryFiles && galleryFiles.map((gallery) => (
                        <div key={gallery.id = crypto.randomUUID()} className={styles.galleryImgSelected}>
                          <img src={URL.EditObjectURL(gallery)} />
                        </div>
                      ))}
                    </div> </> : null}
              </div>


            </div>
            <div>
              {<p className={styles.asteristic}>{error}</p>}

            </div>

            <label className={styles.btnSubmit}>
              <input type="submit" className={styles.btnEdit} disabled={isNotReady} value={isUploading ? "Uploading..." : "Edit Product"} />
            </label>


          </form>
        </div>

        <div className={styles.boxProductPreview}>

          <h3>Product Preview</h3>

          <div className={styles.product_trending}>
            <div className={styles.product_details}>

              <div className={styles.boxProdImg}>
                {imgProd ? <img className={styles.newImage} src={imgProd} alt='' /> : <img src={genShirt}></img>}

              </div>

              <div className={styles.nameAndCategory}>
                {prodName ? <p className={styles.product_name}>{prodName}</p> : <p>(Insert Name) </p>}
                {category ? <h3 className={styles.product_category}>| {category}</h3> : <p style={{ fontSize: ".9em", fontWeight: "bold" }}>| (Select a category)</p>}

              </div>


              <div className={styles.prices}>
                {previousPrice && <span className={styles.product_prevPrice}>{previousPrice} $  </span>}
                {prodPrice ? <span className={styles.product_price}>{prodPrice} $</span> : <p>(Insert Price) </p>}

              </div>

              <div className={styles.product_button}>
                <button className={styles.btn_view}> View</button>
                <button className={styles.btn_add}><ShCart className={styles.shCart} /> </button>
              </div>

            </div>

          </div>


        </div>
      </div>


    </div>

  )
}

export default FormEditProducts