import React from 'react'
import { Link } from 'react-router-dom'

// Impresion de la Card 
const Item = ({producto}) => {
  
    return (
        <div className='my-3 shadow-xl' id={producto.id} >
          <img src={producto.image} alt={producto.title} className='w-full h-52' />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{producto.title}</div>
              <p className="text-gray-700 text-base">{producto.text}</p>
          </div>
          <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{producto.hashtag1}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{producto.hashtag2}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{producto.hashtag3}</span>
          </div>
          <div className="inline-flex rounded-md shadow m-4 b">
          
            {/* Enlace para ir al detalle del producto. */}
            <Link to={`/Item/${producto.id}`} className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300"
            >
                Mas informacion
            </Link>
          </div>
        </div>
    )
}

export default Item



