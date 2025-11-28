import { createFileRoute } from '@tanstack/react-router'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

import { getCabins } from '@/services/apiCabins'
import Spinner from '@/ui/Spinner/Spinner'
import CabinTable from '@/features/cabins/CabinTable'

export const cabinsQueryOptions = queryOptions({
  queryKey: ['cabins'],
  queryFn: getCabins,
})

export const Route = createFileRoute('/cabins')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(cabinsQueryOptions),
  pendingComponent: () => <Spinner />,
  // create Error Component.
  errorComponent: ({ error, reset }) => {
    return (
      <div>
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <button onClick={reset}>Try again</button>
      </div>
    )
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { data: cabins } = useSuspenseQuery(cabinsQueryOptions)
  console.log('cabins', cabins)

  return (
    <>
      <h1>Cabins</h1>
      <CabinTable></CabinTable>
    </>
  )
}
