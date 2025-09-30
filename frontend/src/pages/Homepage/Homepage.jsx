import styles from './Homepage.module.css'
import {useNavigate} from 'react-router'

const Homepage = () => {

  let navigate = useNavigate()
  return (
    <main >
        <section className={styles.container_newcollections}>
<div className={styles.box_newArrivals}>
<h2>Shop New Arrivals</h2>
<button on onClick={() => 
  navigate("/new-collections")
}> Shop Now
</button>
</div>
        </section>

        <section className={styles.container_trendings}>
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
    </main>
  )
}

export default Homepage