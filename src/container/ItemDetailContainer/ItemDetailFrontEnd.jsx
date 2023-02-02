
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetchFrontEnd } from '../../utils/gFetchFrontEnd'
import { ItemDetail } from './ItemDetail'

const ItemDetailFrontEnd = () => {
  const[producto, setProducto]= useState({})
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    gFetchFrontEnd(id)
      .then( resp => setProducto(resp))
  }, [id])


  console.log(producto);
  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailFrontEnd