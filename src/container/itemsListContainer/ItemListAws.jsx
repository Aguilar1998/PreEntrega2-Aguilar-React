import React,{useState, useEffect} from 'react'
import { gFetchAWS } from '../../utils/gFetchAWS';
import ItemList from './ItemList'


export const ItemListAws = () => {
    const [items, setItems]= useState([])
    useEffect(()=>{
        gFetchAWS()
        .then((res)=>setItems(res))
    }, [])
    

    console.log(items)
    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

