import styles from './CabinRow.module.scss'
import type { Cabin } from '@/types'

interface CabinProps {
  cabin: Cabin
}
function CabinRow({ cabin }: CabinProps) {
  const { id, image, maxCapacity, regularPrice, discount } = cabin
  return (
    <div className={styles.row}>
      <div>
        <img src={image} className={styles.img}></img>
      </div>
      <p>{id}</p>
      <p>Up to {maxCapacity} guests</p>
      <p className={styles.price}>{regularPrice}</p>
      <p className={styles.discount}>{discount}</p>
      <button>Delete</button>
    </div>
  )
}

export default CabinRow
