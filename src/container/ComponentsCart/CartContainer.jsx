
import React, { useContext, useState } from "react"
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ Children }) => {
  const [cart, setCart] = useState([])

  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity })
    setCart(newCart)
  }

  const clearCart = () => setCart([])

  const isInCart = (id) => (
    cart.find(product => product.id === id ? true : false
  ))

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct
    }}>
      {Children}
    </CartContext.Provider>
  )
}
