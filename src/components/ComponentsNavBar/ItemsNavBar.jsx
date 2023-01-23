import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemsNavBar = () => {
    return (
        <div className="text-xl lg:flex-grow">
            <NavLink className={({isActive})=> isActive ? 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4': 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'}to='/'>
                Service AWS
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4' : 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'} to='/FrontEnd'>
                Service Front-End
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block lg:mt-0 text-gray-800 border-2 border-transparent border-b-gray-800' : 'block mt-4 lg:inline-block lg:mt-0 text-gray-800 border-2 border-transparent hover:border-b-gray-800'} to='/sketch'>
                Service Sketch
            </NavLink>
        </div>
    )
}

export default ItemsNavBar