import { useSuspenseQuery } from '@tanstack/react-query'
import styles from './Cabins.module.scss'
import CabinTable from './CabinTable'
import { cabinsQueryOptions } from '@/routes/cabins'
import Button from '@/ui/Button/Button'

function CabinsPage() {
  const { data: cabins } = useSuspenseQuery(cabinsQueryOptions)

  return (
    <>
      <header className={styles.header}>
        <h1>CABINS</h1>
        <Button
          size="sm"
          variation="primary"
          onClick={() => console.log('adding new cabin')}
          className={styles.addButton}
        >
          Add new cabin
        </Button>
      </header>
      <CabinTable cabins={cabins}></CabinTable>
    </>
  )
}

export default CabinsPage
