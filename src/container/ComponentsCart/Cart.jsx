import React from 'react'

export const Cart = ({ product }) => {

    return (
        <div className='flex flex-row justify-around aling items-center w-3/4 m-auto mt-32 border-gray-200 rounded-lg border-2 p-14   bg-yellow-50 '>
            <img src={product.image} alt="" className='w-20 padding-5 shadow-2xl rounded-xl	h-1/2	 p-0.5 ' />
            <div className="ml-12 flex flex-col">
                <div className="font-light text-xl mb-2">{product.categoria}</div>
            </div>
            <div className="w-1/2 ">
                {product.count}
            </div>
            <div>
                <button>Eliminar</button>
            </div>
        </div>
    )
}
