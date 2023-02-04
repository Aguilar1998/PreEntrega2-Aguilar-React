import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { gFetch } from "../../utils/gFetch";
import ItemList from './ItemList'


const ItemListContainer = () => {
    const [items, setItems]= useState([])
    const { id } = useParams()
    const [ loading, setLoading ]= useState(true)
    
    useEffect(()=>{
        gFetch()
        .then((res)=>{
            if(id){
                setItems(res.filter((item) => item.categoria === id))
            }else{
                setItems(res)
            }
        })
        .finally(()=> setLoading(false))
    },[id])
   
    return (
        <div className=' h-screen'>
            {   loading 
                ? 

                    <div className='flex flex-col h-3/6 justify-center'>
                        <RingLoader className='m-auto' color="#e5f15f" size={100} />
                    </div> 
                :
                
                <ItemList items={items} />
            }

        </div>
    )
}

export default ItemListContainer