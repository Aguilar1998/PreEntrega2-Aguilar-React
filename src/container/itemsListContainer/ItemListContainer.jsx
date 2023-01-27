import React,{useState, useEffect} from 'react'
import { gFetch } from '../../utils/gFetch'
import ItemList from './ItemList'


const ItemListContainer = () => {
    const [items, setItems]= useState([])
    useEffect(()=>{
        gFetch()
        .then((res)=>setItems(res))
    },[])
    console.log(items)
    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer