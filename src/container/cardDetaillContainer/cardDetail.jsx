import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const ItemDetail = () => {
  const [ producto, setProducto ] = useState({})

  const { detailId } = useParams()

  useEffect(() => {
    
    gFetch(detailId)

    .then(resp => setProducto(resp))
    
  }, [])
  
  return (
    <div>
        asdfsf
    </div>
  )
}
