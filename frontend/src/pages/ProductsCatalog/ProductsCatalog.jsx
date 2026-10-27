import { React, useEffect, useState } from 'react'

//styles
import styles from './ProductsCatalog.module.css'

//hooks
import { useSearchParams } from 'react-router-dom'


//components
import Product from '../../components/Product.jsx'

//icons
import BabyShirt from '../../assets/img/icons/babyc.svg'
import Dress from '../../assets/img/icons/dressc.svg'
import Suit from '../../assets/img/icons/suitc.svg'

const ProductsCatalog = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get('category') || '';

    const [types, setTypes] = useState({ Shoes: true, Shirts: true, Pants: true, Hats: true });
    const [price, setPrice] = useState(500);
    const [size, setSize] = useState('');
    const [collection, setCollection] = useState(categoryFromUrl);
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const category = searchParams.get('category');
        setCollection(category || '');
    }, [searchParams]);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            const params = new URLSearchParams();

            if (collection) params.append('category', collection);
            if (price) params.append('maxPrice', price);
            if (size) params.append('productSize', size);

            const selectedTypes = Object.keys(types).filter(typeKey => types[typeKey]);
            const typesString = selectedTypes.join(',');
          

            if (selectedTypes.length > 0) {
                params.append('productType', typesString);

            }
            const url = `http://localhost:4000/api/products?${params.toString()}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setListProducts(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error(err);
                setListProducts([]);
            }


        };

        fetchFilteredProducts();
    }, [collection, price, size, JSON.stringify(types)]);

    const handleCategoryClick = (categoryName) => {
        const newCategory = collection === categoryName ? '' : categoryName;
        setCollection(newCategory);

        if (newCategory) {
            setSearchParams({ category: newCategory });
        } else {
            setSearchParams({});
        }


    };

    return (
        <main>
            <section className={styles.container_manageProducts}>

                {/*BOX TOOLS AND FILTERS */}
                <div className={styles.box_toolFilters}>
                    <div className={styles.filters}>

                        <div className={styles.filterTitle}>
                            <h2> Filters</h2>
                        </div>

                        <div className={styles.collectionFilter}>
                            <div className={styles.filterTitle}>
                                <h3>Collection</h3>
                            </div>

                            <div className={styles.collectionRoll}>

                                <button onClick={() => handleCategoryClick("Kids")} className={styles.optRoll}>
                                    <div className={styles.iconCollection}>
                                        <img src={BabyShirt} alt="" />
                                    </div>
                                    <p>Kid's</p>
                                </button>

                                <button onClick={() => handleCategoryClick("Woman")} className={styles.optRoll} >
                                    <div className={styles.iconCollection}>
                                        <img src={Dress} alt="" />
                                    </div>
                                    <p>Woman's</p>
                                </button>

                                <button onClick={() => handleCategoryClick("Men's")} className={styles.optRoll}>
                                    <div className={styles.iconCollection}>
                                        <img src={Suit} alt="" />
                                    </div>
                                    <p>Men's</p>
                                </button>
                            </div>
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
                                        onClick={() => setSize(size === s ? '' : s)}
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
                    <div className={styles.showProducts}>
                        <div className={styles.introShowProducts}>
                            <h2>{collection ? `${collection} Category` : 'All Categories'}</h2>
                            <p>Showing: {collection ? collection : 'All Products'}</p>
                        </div>

                        <div className={styles.boxProducts}>
                            {listProducts.length > 0 ? (
                                listProducts.map((product) => (
                                    <Product
                                        key={product._id}
                                        ProductName={product.prodName}
                                        productCategory={product.category}
                                        previousPrice={product.previousPrice || null}
                                        imgProduct={product.imageUrl}
                                        ProductPrice={product.prodPrice}
                                        product={product}
                                    />
                                ))
                            ) : (
                                <p>Não foi possível encontrar nenhum produto com este filtro.</p>
                            )}
                        </div>

                    </div>
                </div>

            </section>
        </main>
    )
}

export default ProductsCatalog