import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import { gFetch } from '../../utils/gFetch'
import { ItemDetail } from './ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [ loading, setLoading ]= useState(true)

  const { id } = useParams()

  useEffect(() => {
    gFetch(id)
    .then(resp => setProducto(resp))
    .finally(() => setLoading(false))
  }, [id])


  return (
    <div className=' h-screen'>
      {loading
        ?
        <div className='flex flex-col h-3/6 justify-center'>
          <RingLoader className='m-auto' color="#e5f15f" size={100} />
        </div>
        :
        < ItemDetail producto = { producto } />
      }
    </div>
  )
}

export default ItemDetailContainer