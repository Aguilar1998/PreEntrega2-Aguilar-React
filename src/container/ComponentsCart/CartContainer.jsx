import React, { useContext } from 'react'
import { RingLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'

export const CartContainer = () => {
  const { loading, product } = useContext(CartContext)

  return (
    <div>
      <h1>CartContainer</h1>
      {/* Condicional para mostrar el spinner mientras cargan los datos */}
      {
        loading
        ?
        <div className='flex flex-col h-3/6 justify-center'>
            < RingLoader className='m-auto' color="#e5f15f" size={100} />
          </div >
          :
          // Se mapean los productos 
          product.map(item => (
            <div className='flex flex-row justify-around aling items-center w-3/4 m-auto mt-32 border-gray-200 rounded-lg border-2 p-14   bg-yellow-50 '>
              <img src={item.image} alt="" className='w-20 padding-5 shadow-2xl rounded-xl	h-1/2	 p-0.5 ' />
              <div className="ml-12 flex flex-col">
                <div className="font-light text-xl mb-2">{item.categoria}</div>
              </div>
              <div className="w-1/2 ">
                {item.count}
              </div>
              <div>
                <button>Eliminar</button>
              </div>
            </div>
          ))
      }
    </div>
  )
}
