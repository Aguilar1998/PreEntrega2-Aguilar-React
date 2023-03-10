// Import React
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import { getFirestore, getDoc, doc, } from "firebase/firestore";
// Import Components
import { ItemDetail } from './ItemDetail'



// --------------- Contenedor para detalle ------------- // 
const ItemDetailContainer = () => {

  // Estado
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const { detaliId } = useParams()

  useEffect((res) => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', detaliId)
    getDoc(queryDoc)
      .then(results => setProduct({ id: results.id, ...results.data() }))
      .then((res) => setLoading(false))
      .catch(err => console.error(err))
  }, [detaliId])



  return (
    <div className=' h-screen'>
      {loading
        ?
        <div className='flex flex-col h-3/6 justify-center'>
          <RingLoader className='m-auto' color="#e5f15f" size={100} />
        </div>
        :
        <div>
          <ItemDetail product={product} key={product.id} />
        </div>
      }
    </div>
  )
}

export default ItemDetailContainer