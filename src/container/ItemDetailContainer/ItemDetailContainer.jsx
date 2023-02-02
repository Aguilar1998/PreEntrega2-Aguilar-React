import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import { ItemDetail } from './ItemDetail'

const ItemDetailContainer = () => {
  const[producto, setProducto]= useState({})
  const { id } = useParams()
  

  useEffect(() => {
    gFetch(id)
      .then( resp => setProducto(resp))
  }, [id])

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer