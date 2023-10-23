import { instance } from '@/utils/use-request'
import { useEffect, useState } from 'react'
import Card from './card'

function NewArrivals() {
  const [arrivals, setArrivals] = useState()
  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const data = await instance.get('/home/newarrivals')
      setArrivals(data.data?.newArrivalList)
    })()
  }, [])

  return (
    <div className='flex justify-between'>
      {arrivals?.map((arrival) => (
        <Card key={arrival._id} {...arrival} />
      ))}
    </div>
  )
}
export default NewArrivals
