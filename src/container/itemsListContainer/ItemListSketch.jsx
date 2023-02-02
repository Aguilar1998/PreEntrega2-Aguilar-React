import React,{useState, useEffect} from 'react'
import { gFetchSketch } from '../../utils/gFetchSketch'
import ItemList from './ItemList'


export const ItemListSketch = () => {
    const [items, setItems]= useState([])
    useEffect(()=>{
        gFetchSketch()
        .then((res)=>setItems(res))
    }, [])
    

    console.log(items)
    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

