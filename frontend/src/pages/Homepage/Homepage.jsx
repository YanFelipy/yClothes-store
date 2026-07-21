import styles from './Homepage.module.css'
import {useNavigate} from 'react-router'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';





// ASSETS // 
import imgTrend from '../../assets/img/product/gym_product_trend.jpg'
import flashSale from '../../assets/img/hype/FlashSale.png'
import winterCollection from '../../assets/img/hype/WinterCollection.png'




const Homepage = () => {

  let navigate = useNavigate()
  return (
    <main>

   {/* SECTION NEW COLLECTIONS */}

        <section className={styles.container_newcollections}>
<div className={styles.newsSlider}>
 <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{ 
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
          slidesPerView={1}
      >
        <SwiperSlide>
          <img src={flashSale} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={winterCollection} />
        </SwiperSlide>
      
      </Swiper>
</div>
        </section>

   {/* SECTION CATEGORIES */}

        <section className={styles.container_categories}>
<div className={styles.box_categories}>
<div className={styles.kidsc}>
      <div className={styles.name_category}>
    <h2>
     Kids
      </h2>
       <span>
      Collection
      </span> 
      
  </div>
</div>
<div className={styles.womanc}>
    <div className={styles.name_category}>
    <h2>
      Woman's
      </h2>
       <span>
      Collection
      </span> 
      
  </div>
  </div>

<div className={styles.mensc}>
     <div className={styles.name_category}>
    <h2>
     Men's
      </h2>
       <span>
      Collection
      </span> 
      
  </div>
  </div>

</div>

        </section>

 {/* SECTION TRENDING NOW */}
<section className={styles.container_trendingnow}>



<div className={styles.box_trending_now}>
<h2>Trending Now</h2>
<div className={styles.trending_products}>
   {/* aqui vem o map do produto, mock abaixo */}

<div className={styles.product_trending}>

  <a className={styles.product_details}>

<img src={imgTrend} className={styles.product_Image}/>
  <h3 className={styles.product_category}>Men's</h3>
  <p className={styles.product_name}>Gym set Black</p>
  <p className={styles.product_price}>80,00 $</p>

  </a>
  <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>

<div className={styles.product_trending}>

  <div className={styles.product_details}>

<img src={imgTrend} className={styles.product_Image}/>
  <h3 className={styles.product_category}>Men's</h3>
  <p className={styles.product_name}>Gym set Black</p>
  <p className={styles.product_price}>80,00 $</p>

  </div>
  <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>
<div className={styles.product_trending}>

  <div className={styles.product_details}>

<img src={imgTrend} className={styles.product_Image}/>
  <h3 className={styles.product_category}>Men's</h3>
  <p className={styles.product_name}>Gym set Black</p>
  <p className={styles.product_price}>80,00 $</p>

  </div>
  <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>
<div className={styles.product_trending}>

  <div className={styles.product_details}>

<img src={imgTrend} className={styles.product_Image}/>
  <h3 className={styles.product_category}>Men's</h3>
  <p className={styles.product_name}>Gym set Black</p>
  <p className={styles.product_price}>80,00 $</p>

  </div>
  <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>
<div className={styles.product_trending}>

  <div className={styles.product_details}>

<img src={imgTrend} className={styles.product_Image}/>
  <h3 className={styles.product_category}>Men's</h3>
  <p className={styles.product_name}>Gym set Black</p>
  <p className={styles.product_price}>80,00 $</p>

  </div>
  <div className={styles.product_button}>
    <button className={styles.btn_add}> View</button>
    <button className={styles.btn_view}> add to cart</button>
  </div>
</div>

</div>

</div>
</section>


    </main>





  )
}

export default Homepage