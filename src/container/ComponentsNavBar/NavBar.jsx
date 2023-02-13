import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import AppContext from '../../Context/AppContext'
import ItemsNavBar from './ItemsNavBar'
import '../../assets/index.css'
import { Menu } from './Menu'





// Components Navbar, this is tailwind.
// https://bluuweb.github.io/tailwindcss/05-components/#navigation-navbar
const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const [toggleOrders, setToggleOrders] = useState(false)
    const { state } = useContext(AppContext)

    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (

        <nav className="flex  bg-yellow-200 p-6 flex-col">
            <div className='flex items-center justify-between flex-wrap  bg-yellow-200  p-6'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'slide-in-bck-left border-2 border-transparent mr-4' : ' mt-4 lg:inline-block lg:mt-0 border-2 border-transparent mr-4'} >

                    <div className="flex items-center flex-shrink-0 text-blue-500 mr-6">
                        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                        <span className="font-semibold text-xl tracking-tight focus-in-expand-fwd">Martin Aguilar</span>
                    </div>

                </NavLink>
                <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
                    <div className="text-sm lg:flex-grow ">
                        <li onClick={handleToggle} className="no-underline list-none" >
                            Gmail: aguilarmartin@gmail.com
                        </li>
                    </div>
                    {toggle && <Menu />}
                    <div onClick={() => setToggleOrders(!toggleOrders)}>
                        <Link to='/CartContainer' className="inline-block text-sm px-4 py-2 leading-none border-2 rounde rounded-lg text-blue-500 hover:border-blue-500  mt-4 lg:mt-0">
                            <div>{state.cart.length > 0 ? state.cart.length : null}</div>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Segundo componente ItemsNavBar con enlaces de diferentes productos/servicios.*/}
            <div className='flex justify-center flex-col items-center '>
                <ItemsNavBar />
            </div>

        </nav>
    )
}

export default NavBar