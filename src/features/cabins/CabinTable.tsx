import CabinRow from './CabinRow'
import styles from './CabinTable.module.scss'
import type { Cabin } from '@/types'

interface CabinTableProps {
  cabins: Array<Cabin>
}
function CabinTable({ cabins }: CabinTableProps) {
  return (
    <div role="table">
      <header className={styles.header}>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </header>

      {cabins.map((cabin: Cabin) => (
        <CabinRow cabin={cabin} key={cabin.id}></CabinRow>
      ))}
    </div>
  )
}

export default CabinTable
