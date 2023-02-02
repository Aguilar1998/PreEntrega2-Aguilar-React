import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { gFetch } from "../../utils/gFetch";
import ItemList from './ItemList'


const ItemListContainer = () => {
    const [items, setItems]= useState([])
    const { id } = useParams()
    
    useEffect(()=>{
        gFetch()
        .then((res)=>{
            if(id){
                setItems(res.filter((item)=>item.categoria === id))
            }else{
                setItems(res)
            }
        })
    },[id])
   
    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer