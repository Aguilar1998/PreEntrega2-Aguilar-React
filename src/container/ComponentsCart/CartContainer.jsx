import React, { useContext } from 'react'
import { RingLoader } from 'react-spinners'
import AppContext from '../../Context/AppContext'
import { Cart } from './Cart'

export const CartContainer = () => {
  const { loading, state } = useContext(AppContext)

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
          state.cart.map(item => (
            <Cart item={item} key={`OrderItem-${item.id}`} />
          ))
      }
    </div>
  )
}
