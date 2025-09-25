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
    </main>
  )
}

export default Homepage