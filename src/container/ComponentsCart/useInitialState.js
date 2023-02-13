import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'

const InitialState = {
    cart: [],
}

export const useInitialState = () => {
    // Estado
    const [state, setState] = useState(InitialState)
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])


    // funcion para agregar al carrito sin modificarlo.
    const addToCart = (paylod) => {
        setState({
            ...state,
            cart:[...state.cart, paylod]
        })
    }



    const { id } = useParams()

    // --------------- rendering ------------- // 
    // --------------- Segundo rendering para cambiar de estado ------------- // 
    useEffect(() => {
        // --------------- condicional dentro del rendering ------------- // 
        gFetch(id)
        .then(resp => setProduct(false))
        .then(resp => setLoading(false))
    }, [id])

    // retornar 
    return {
        state,
        addToCart,
        loading,
        product,
        cart
    }
}
