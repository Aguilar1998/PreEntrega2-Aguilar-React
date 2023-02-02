
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetchSketch } from '../../utils/gFetchSketch'
import { ItemDetail } from './ItemDetail'

const ItemDetailSketch = () => {
  const[producto, setProducto]= useState({})
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    gFetchSketch(id)
      .then( resp => setProducto(resp))
  }, [id])


  console.log(producto);
  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailSketch