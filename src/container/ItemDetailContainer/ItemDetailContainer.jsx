// Import React
import { useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
// Import Components
import { CartContext } from '../../Context/CartContext'
import { gFetch } from '../../utils/gFetch'
import { ItemDetail } from './ItemDetail'
import ItemCount from '../ItemCount/ItemCount'


// --------------- Contenedor para detalle ------------- // 
const ItemDetailContainer = () => {

  // Estado
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  const { addItem } = useContext(CartContext)

  // Function Add to Cart
  function handleAddtoCart(count) {
    alert(`Agregaste ${count} de ${product.title} al carrito`)
    product.count = count;
    addItem(product)
  }


  // --------------- useEfeect ------------- // 

  /* ----------------------------------------------
  /* Generar efecto de desmontaje // 
  * Luego del primer renderizado se produce un segundo rendering para cambiar de estado,
  * A veces se produce sin intencion y causan bugs o perdida no intencionada de estados
  * ---------------------------------------------- 
  */

  /**
   * ----------------------------------------
   * Condicional para modificar el estado
   * ----------------------------------------
   */

  useEffect(() => {
    gFetch(id)
      // --------------- UpDate ------------- // 
      .then(resp => setProduct(resp))
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
        <div>
          <ItemCount handleAddtoCart={handleAddtoCart} />
          <ItemDetail product={product} />
        </div>
      }
    </div>
  )
}

export default ItemDetailContainer