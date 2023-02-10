import React from 'react'
import Item from './Item'



// Llamado de item

export default function ItemList({items}) {
  return (
    <div className='w-8/12 m-auto'>
      <div className=" flex mt-12 flex-wrap ">
          {
            items.map(producto => (
              <div className="sm:w-1/2 lg:w-1/4  my-2">
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