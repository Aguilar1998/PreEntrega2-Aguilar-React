import React from 'react'
import { NavLink } from 'react-router-dom'


// Components Navigation(ItemsNavbar) this is tailwind
const ItemsNavBar = () => {

    return (

        <div className="text-xl lg:flex-grow">

            {/* React-router-dom */}
            {/* Se agrego un condicional para identificar cuando el evento click se realiza y asi darle estilos definidos. */}
            {/* Se encuentra con las rutas sin funcionalidad. */}
            <NavLink className={({isActive})=> isActive ? 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4': 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'}to='/'>
                Service AWS
            </NavLink>

            {/* React-router-dom */}
            {/* Se agrego un condicional para identificar cuando el evento click se realiza y asi darle estilos definidos. */}
            {/* Se encuentra con las rutas sin funcionalidad. */}
            <NavLink className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4' : 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'} to='/ItemListFrontEnd'>
                Service Front-End
            </NavLink>

            {/* React-router-dom */}
            {/* Se agrego un condicional para identificar cuando el evento click se realiza y asi darle estilos definidos. */}
            {/* Se encuentra con las rutas sin funcionalidad. */}
            <NavLink className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block lg:mt-0 text-gray-800 border-2 border-transparent border-b-gray-800' : 'block mt-4 lg:inline-block lg:mt-0 text-gray-800 border-2 border-transparent hover:border-b-gray-800'} to='/ItemListSketch'>
                Service Sketch
            </NavLink>

        </div>

    )
}

export default ItemsNavBar