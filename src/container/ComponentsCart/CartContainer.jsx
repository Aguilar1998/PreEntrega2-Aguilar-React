import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'
import { Cart } from './Cart'

export const CartContainer = () => {
    const { cart, loading, getTotalPrice, clearCart } = useContext(CartContext)

    console.log(cart);
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center'>
                <h3 className=' m-auto text-3xl'>Total: ${getTotalPrice()}</h3>

                <button className='m-auto border-2 pl-3 pr-3 border-gray-300 hover:text-white hover:bg-gray-800 hover:border-transparent  rounded-xl' onClick={() => clearCart()} >
                    Vaciar Carrito
                </button>
            </div>
            {
                loading
                    ?
                    <div className='flex flex-col h-3/6 justify-center'>
                        < RingLoader className='m-auto' color="#e5f15f" size={100} />
                    </div >
                    :
                    // Se mapean los productos 
                    cart.map(product => (
                        <Cart product={product} key={product.id} />
                    ))
            }
            <NavLink to='/' className={({ isActive }) => isActive ? 'slide-in-bck-leftf m-auto bg-gray-700 border-2 border-transparent mr-4' : ' flex flex-col justify-center mt-4 lg:inline-block lg:mt-0 border-2  border-transparent mr-4'} >

                <div className="flex flex-col  m-auto  items-center text-blue-500 ">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl focus-in-expand-fwd">Home</span>
                </div>

            </NavLink>
        </div>
    )
}
