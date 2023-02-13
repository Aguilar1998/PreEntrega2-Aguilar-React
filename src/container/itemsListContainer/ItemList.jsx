import React from 'react'
// import { useState } from 'react'
import Item from './Item'



// Esta funcion "ItemList" se ocupa de renderizar las cartas de productos.

export default function ItemList({ items }) {
  


  // de esta forma consumiria una api
  // const [products, setproducts] = useState([])

  // useEffect(async () => {
  //     const response = await axios(API);
  //     setProduct(response.data);
  // },[])

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