import React from 'react'
import Item from './Item'




export default function ItemList({ productos }) {

  return (
    <div className='w-8/12 m-auto'>
      <div className=" flex mt-12 flex-wrap ">
          {
            productos.map(producto => (
              <div className="sm:w-1/2 lg:w-1/4  my-2">
                <Item
                    producto={producto}
                />
              </div>
            ))
          }
    </div>
    </div>
  )
}