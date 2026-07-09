import { React, useState } from 'react'
import styles from './ManageProducts.module.css'

import tool from '../../assets/img/icons/tool.svg'
import create from '../../assets/img/icons/create.svg'
import edit from '../../assets/img/icons/edit.svg'
import deelete from '../../assets/img/icons/delete.svg'

import FormEditProducts from '../../components/FormEditProducts'
import FormCreateProducts from '../../components/FormCreateProducts'
const ManageProducts = () => {


  const [types, setTypes] = useState({ shoes: true, tshirt: true, pants: true, hats: true });
  const [price, setPrice] = useState(250);
  const [size, setSize] = useState('M');
  const [openEdit, setOpenEdit] = useState(false)
  const [openCreate, setOpenCreate] = useState(true)



  return (
    <main>
      <section className={styles.container_manageProducts}>

        {/*BOX TOOLS AND FILTERS */}
        <div className={styles.box_toolFilters}>
          <div className={styles.pageTools}>

            <div className={styles.toolTitle}>
              <img style={{ width: "30px", height: "30px" }} src={tool} alt="" />

              <h3>Page Tools</h3>

            </div>

            <div className={styles.toolsOptions}>
              <button onClick={(e) => e.currentTarget(setOpenEdit(false), setOpenCreate(true))}> <img src={create} alt="" />Create Product</button>
              <button onClick={(e) => e.currentTarget(setOpenEdit(true), setOpenCreate(false))}> <img src={edit} alt="" />Edit Product</button>


            </div>
          </div>

          <div className={styles.filters}>
            <div className={styles.filterTitle}>
              <h3> Filters</h3>
            </div>
            <div className={styles.filterType}>
              <h3>Type</h3>

              {Object.keys(types).map((item) => (
                <div key={item} className={styles.checkboxItem}>
                  <input className={styles.crWrapper}
                    type="checkbox"
                    checked={types[item]}
                    onChange={() => setTypes(prev => ({ ...prev, [item]: !prev[item] }))}
                  />
                  <label>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                </div>
              ))}

            </div>

            <div className={styles.filterPrice}>
              <h3>Price</h3>
              <div className={styles.priceLabels}>
                <span>Min: 0$</span><span>Max: 500$</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className={styles.priceValue}>{price}$</div>
            </div>


            <div className={styles.filterSizes}>
              <h3>Sizes</h3>
              <div className={styles.sizeContainer}>
                {['SM', 'M', 'L', 'XL', 'XXL'].map((s) => (
                  <button
                    key={s}
                    className={`${styles.sizeButton} ${size === s ? styles.active : ''}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>


          </div>


        </div>

        {/*BOX EDIT AND VIEW PRODUCTS */}


        <div className={styles.boxEditAndProducts}>
          <div className={styles.box_editViewProd}>
            <div className={styles.boxCED}>
              {openCreate != false ? <FormCreateProducts /> : ""}
              {openEdit != false ? <FormEditProducts /> : ""}

            </div>
          </div>

          <div className={styles.showProducts}>
            <div className={styles.introShowProducts}>
              <h2 >(*) Category</h2>
              <p > Showing : All Products</p>
            </div>
          </div>
          
        </div>


        <div>

        </div>

      </section>
    </main>
  )
}

export default ManageProducts