import React from 'react'
import Card from './Item'
import { productos } from "../../utils/gFetch";


// Llamado de item

export default function CardsSketch() {
  return (
    <div className='w-8/12 m-auto'>
      <div className="my-5 flex m-auto flex-wrap -mx-2">
          {
            productos.map(productos => (
              <div className="sm:w-1/2 lg:w-1/3 px-2 my-2">
                <Card
                  productos={productos}
                />
              </div>
            ))
          }
    </div>
    </div>
  )
}
