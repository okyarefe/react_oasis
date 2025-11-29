import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import styles from './CabinRow.module.scss'
import type { Cabin } from '@/types'
import { deleteCabin } from '@/services/apiCabins'
import Spinner from '@/ui/Spinner/Spinner'
import Button from '@/ui/Button/Button'

interface CabinProps {
  cabin: Cabin
}
function CabinRow({ cabin }: CabinProps) {
  const { id, name, image, maxCapacity, regularPrice, discount } = cabin
  const queryClient = useQueryClient()
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin Successfully deleted')
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      })
    },
    onError: (err) => toast.success(err.message),
  })

  return (
    <div className={styles.row}>
      <div className={styles.imgDiv}>
        <img src={image} className={styles.img}></img>
      </div>
      <p className={styles.name}>{name}</p>
      <p>Up to {maxCapacity} guests</p>
      <p className={styles.price}>{regularPrice}</p>
      <p className={styles.discount}>{discount}</p>
      <Button
        variation="danger"
        size="sm"
        onClick={() => mutate(id)}
        disabled={isDeleting}
      >
        {isDeleting ? <Spinner size="mini"></Spinner> : 'Delete'}
      </Button>
    </div>
  )
}

export default CabinRow
