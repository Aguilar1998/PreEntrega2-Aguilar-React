import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import { ItemDetail } from './ItemDetail'
import { RingLoader } from 'react-spinners';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)


  const { id } = useParams()

  useEffect(() => {
    gFetch(id)
      .then(resp => setProducto(resp))
      .then(resp => setLoading(false))
  }, [id])


  return (
    <div className=' h-screen'>
      {loading
        ?

        <div className='flex flex-col h-3/6 justify-center'>
          <RingLoader className='m-auto' color="#e5f15f" size={100} />
        </div>
        :

        <ItemDetail producto={producto} />
      }

    </div>
  )
}

export default ItemDetailContainer