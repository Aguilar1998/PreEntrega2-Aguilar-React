import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import { gFetch } from '../../utils/gFetch'
import { ItemDetail } from './ItemDetail'

// --------------- Contenedor para detalle ------------- // 

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

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
        < ItemDetail producto={producto} />
      }
    </div>
  )
}

export default ItemDetailContainer