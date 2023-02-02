import React,{useState, useEffect} from 'react'
import { gFetchFrontEnd } from '../../utils/gFetchFrontEnd'
import ItemList from './ItemList'


export const ItemListFrontEnd = () => {
    const [items, setItems]= useState([])
    useEffect(()=>{
        gFetchFrontEnd()
        .then((res)=>setItems(res))
    }, [])
    

    console.log(items)
    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

