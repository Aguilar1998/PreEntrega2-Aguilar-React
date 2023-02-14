import { useState, createContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../utils/firebase/config';


export const CartContext = createContext()


// Bien, ahí encontré un par de detalles a tener en cuenta.

// 1. Dentro el CartContext, noté que estás importando y utilizando el gFetch. Pero al no existir, da error al querer utilizarlo.
// 2. Lo mismo sucede con las funciones de Firebase, noto que tienes dos carpetas "firebase", y una de ellas tiene el config.js vacío. Por eso da error al llamar a ese archivo. Revisa las rutas de importación dentro del ItemListContainer y del ItemDetailContainer, ya que las funciones de Firebase se exportan desde el archivo config que está dentro de utils.

// ¡Quedo atento!



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
        getItems(id)
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
