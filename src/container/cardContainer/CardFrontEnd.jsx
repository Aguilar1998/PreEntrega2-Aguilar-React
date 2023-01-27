import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import CardContainerList from './CardCantainer'





export default function CardsFrontEnd() {
  const [productos, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    if (categoryId) {
      gFetch()
        .then(respuestaPromesa => {
          setProducto(respuestaPromesa.filter(card => card.categoria === categoryId))
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    } else {
      gFetch()
        .then(respuestaPromesa => {
          setProducto(respuestaPromesa)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }
  },[categoryId])


  return (
    <div className='w-8/12 m-auto'>
        { loading
        ?
          <div>
            <h1>Cargando...</h1>  
          </div>
        :
          <CardContainerList productos={productos} />
        }
    </div>
  )

}
