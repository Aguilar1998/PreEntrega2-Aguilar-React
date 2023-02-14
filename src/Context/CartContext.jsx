import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.find((item) => item.id === id) ? true : false; 

    const addToCart = (producto, count) => {
        if (isInCart(producto.id)) {
            setCart(cart.map(product => {
                return product.id === producto.id ? {...product, count: producto.count = count + count} : producto
            }))
        } else {
            setCart([...cart, { producto, count}])
        }
    }

    const clearCart = () => {
        setCart()
    }

    const removeItem = (idToRemove) => {
        let newCart = cart.filter((item) => item.id !== idToRemove)
        setCart(newCart)
    }

    const getTotalPrice = () => {
        return cart.reduce ((prev, act) => prev + act.count * act.price, 0)
    }
  return (
      <CartContext.Provider
          value={{
              cart,
              addToCart,
              clearCart,
              removeItem,
              getTotalPrice
          }}>
          {children}
      </CartContext.Provider>
  )
}
