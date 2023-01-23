import React from 'react'


const Card = ({ id, imageSource, title, textDescription, hashtagReferente1, hashtagReferente2, hashtagReferente3 }) => {
  
    return (
        <div className='my-3 shadow-xl' id={id} >
          <img src={imageSource} alt={title} className='w-full h-52' />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{textDescription}</p>
          </div>
          <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{hashtagReferente1}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{hashtagReferente2}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{hashtagReferente3}</span>
          </div>
          <div className="inline-flex rounded-md shadow m-4 b">
            <a
              href="./index.html"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300"
            >
              Mas informacion
            </a>
          </div>
        </div>
    )
}

export default Card