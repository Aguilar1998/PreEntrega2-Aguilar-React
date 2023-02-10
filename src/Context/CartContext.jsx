
import { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../utils/gFetch"
const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

// --------------- Conditional rendering UpDate ------------- // 
export const CartProvider = ({ Children }) => {

  // --------------- estado ------------- // 

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)


  const { id } = useParams()

  // --------------- rendering ------------- // 
  // --------------- Segundo rendering para cambiar de estado ------------- // 
  useEffect(() => {
  // --------------- condicional dentro del rendering ------------- // 
    gFetch(id)
      .then(resp => setProduct(resp))
      .then(resp => setLoading(false))
  }, [id])

 

  return (
    <CartContext.Provider value={{
      product,
      loading
    }}>
      {Children}
    </CartContext.Provider>
  )
}