
import { createContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../utils/gFetch"

export const CartContext = createContext()

// --------------- Conditional rendering UpDate ------------- // 
export function CartContextProvider(props){

  // --------------- estado ------------- // 
 
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)


  function addItem(item) {
    const isInCart = product.some((itemInCart) => itemInCart.id === item.id)

    if (isInCart) {
      let newCart = [...product]
      let index = product.findIndex((itemInCart) => itemInCart.id === item.id)
      alert('El item ya esta en el carrito')
    } else {
      setProduct([...product,item])
    }
  }

  function removeItem(idToDel) {
    setProduct(product.pop())
  }


  const { id } = useParams()

  // --------------- rendering ------------- // 
  // --------------- Segundo rendering para cambiar de estado ------------- // 
  useEffect(() => {
    // --------------- condicional dentro del rendering ------------- // 
    gFetch(id)
      .then(resp => setProduct(resp))
      .then(resp => setLoading(false))
  
  }, [id])

  const value = {
    product,
    loading,
    addItem,
    removeItem
  }

  return (
    <CartContext.Provider value={ value }>
      {props.children}
    </CartContext.Provider>
  )
}