
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../utils/gFetch"
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ Children }) => {
  const [product, setProducto] = useState({})
  const [loading, setLoading] = useState(true)


  const { id } = useParams()

  useEffect(() => {
    gFetch(id)
      .then(resp => setProducto(resp))
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