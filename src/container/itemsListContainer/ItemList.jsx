import React from 'react'
import Item from './Item'



// Llamado de item

export default function ItemList({items}) {
  return (
    <div className='w-8/12 m-auto'>
      <div className="my-5 flex m-auto flex-wrap -mx-2">
          {
            items.map(producto => (
              <div className="sm:w-1/2 lg:w-1/3 px-2 my-2">
                <Item
                    key={producto.id}
                    producto={producto}
                />
              </div>
            ))
          }
    </div>
    </div>
  )
}