import { useSuspenseQuery } from '@tanstack/react-query'
import CabinRow from './CabinRow'
import styles from './CabinTable.module.scss'
import type { Cabin } from '@/types'
import { cabinsQueryOptions } from '@/routes/cabins'

function CabinTable() {
  const { data: cabins } = useSuspenseQuery(cabinsQueryOptions)
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
        <CabinRow cabin={cabin}></CabinRow>
      ))}
    </div>
  )
}

export default CabinTable
