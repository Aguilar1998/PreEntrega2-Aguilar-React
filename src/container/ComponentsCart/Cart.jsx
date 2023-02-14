// import React, { useContext } from 'react'
// import { CartContext } from '../../Context/CartContext'



export const Cart = ({ product, key }) => {
    // const { addToCart, clearCart, removeItem, getTotalPrice } = useContext(CartContext)

    return (
        <div key={key} className='flex flex-row justify-around aling items-center w-3/4 m-auto mt-32 border-gray-200 rounded-lg border-2 p-14   bg-yellow-50'>
            <img src={product.image} alt="Imagen" className='w-20 padding-5 shadow-2xl rounded-xl	h-1/2	 p-0.5 ' />
            <div className="ml-12 flex flex-col">
                <div className="font-light text-xl mb-2">{product.categoria}</div>
                <div className="font-light text-xl mb-2">({product.title})</div>
            </div>
            <div className="w-1/2 ">
                <li>Cantidad: {product.length}</li>
                <li>Precio: {product.price}</li>
            </div>
            <div>
                <button >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
