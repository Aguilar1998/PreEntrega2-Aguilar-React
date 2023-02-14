import { useState, createContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../utils/gFetch'


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)

    const isInCart = (id) => cart.find((item) => item.id === id) ? true : false;

    const addToCart = (producto, count) => {
        if (isInCart(producto.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === producto.id
                        ? {
                            ...product,
                            count: count + product.count,
                        }
                        : product;
                })
            );
        } else {
            setCart([...cart, { ...producto, count }]);
        }
    };

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (idToRemove) => {
        let newCart = cart.filter((item) => item.id !== idToRemove)
        setCart(newCart)
    }

    const getTotalPrice = () => {
        return cart.reduce((prev, act) => prev + act.count * act.price, 0)
    }

    const { id } = useParams()

    // --------------- rendering ------------- // 
    // --------------- Segundo rendering para cambiar de estado ------------- // 
    useEffect(() => {
        // --------------- condicional dentro del rendering ------------- // 
        gFetch(id)
            .then(resp => setLoading(false))
    }, [id])

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                removeItem,
                getTotalPrice,
                loading,

            }}>
            {children}
        </CartContext.Provider>
    )
}
