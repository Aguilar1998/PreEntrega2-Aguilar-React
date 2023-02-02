
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetchAWS } from '../../utils/gFetchAWS'
import { ItemDetail } from './ItemDetail'

const ItemDetailAWS = () => {
  const[producto, setProducto]= useState({})
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    gFetchAWS(id)
      .then( resp => setProducto(resp))
  }, [id])

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailAWS