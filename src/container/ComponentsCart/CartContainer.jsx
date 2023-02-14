import React, { useContext } from 'react'
import { RingLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'
import { Cart } from './Cart'

export const CartContainer = () => {
  const { cart, loading} = useContext(CartContext)

  return (
    <div>
      <h1>CartContainer</h1>
      {
        loading
          ?
          <div className='flex flex-col h-3/6 justify-center'>
            < RingLoader className='m-auto' color="#e5f15f" size={100} />
          </div >
          :
          // Se mapean los productos 
          cart.map(product => (
            <Cart product={product} key={`OrderItem-${product.id}`} />
          ))
      }
    </div>
  )
}
