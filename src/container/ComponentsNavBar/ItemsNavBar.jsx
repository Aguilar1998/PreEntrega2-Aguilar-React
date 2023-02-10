import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/index.css'


// Components Navigation(ItemsNavbar) this is tailwind
const ItemsNavBar = () => {

    return (

        <div className="text-xl lg:flex-grow slide-in-top">

            {/* React-router-dom */}
            {/* Se agrego un condicional para identificar cuando el evento click se realiza y asi darle estilos definidos. */}
            <NavLink to='/category/AWS' className={({isActive})=> isActive ? 'block mt-4 lg:inline-block slide-in-bck-left  text-gray-800 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4': 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'}>
                Service AWS
            </NavLink>

            {/* React-router-dom */}
            {/* Se agrego un condicional para identificar cuando el evento click se realiza y asi darle estilos definidos. */}
            <NavLink  to='/category/FrontEnd'className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block slide-in-bck-top  text-gray-800 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4' : 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'} >
                Service Front-End
            </NavLink>

            {/* React-router-dom */}
            {/* Se agrego un condicional para identificar cuando el evento click se realiza y asi darle estilos definidos. */}
            <NavLink to='/category/Wireframe' className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block slide-in-bck-right lg:mt-0 text-gray-800 border-2 border-transparent border-b-gray-800' : 'block mt-4 lg:inline-block lg:mt-0 text-gray-800 border-2 border-transparent hover:border-b-gray-800'} >
                Service Sketch
            </NavLink>

        </div>

    )
}

export default ItemsNavBar