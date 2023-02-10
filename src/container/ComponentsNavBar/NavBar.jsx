import '../../assets/index.css'
import React from 'react'
import { Link } from 'react-router-dom'
import ItemsNavBar from './ItemsNavBar'


// Components Navbar, this is tailwind.
// https://bluuweb.github.io/tailwindcss/05-components/#navigation-navbar
const NavBar = () => {

    return (

        <nav className="flex  bg-yellow-200 p-6 flex-col">
            <div className='flex items-center justify-between flex-wrap  bg-yellow-200  p-6'>
                <div className="flex items-center flex-shrink-0 text-blue-500 mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span className="font-semibold text-xl tracking-tight focus-in-expand-fwd">Martin Aguilar</span>
                </div>
                <div className="block lg:hidden">
                    <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
                    <div className="text-sm lg:flex-grow ">

                    </div>
                    <div>
                        <Link to='/CartContainer' className="inline-block text-sm px-4 py-2 leading-none border-2 rounde border-gray-4600 hover:border-black  mt-4 lg:mt-0">
                            🛒
                        </Link>
                    </div>
                </div>
            </div>

            {/* Segundo componente ItemsNavBar con enlaces de diferentes productos/servicios.*/}
            <div className='flex justify-center flex-col items-center '>
                <ItemsNavBar/>
            </div>
            
        </nav>
    )
}

export default NavBar