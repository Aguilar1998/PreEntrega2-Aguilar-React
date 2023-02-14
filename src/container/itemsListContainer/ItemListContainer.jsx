import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { gFetch } from "../../utils/gFetch";
import ItemList from './ItemList'


// --------------- Contenedor para listar las Card ------------- // 
const ItemListContainer = () => {
    // --------------- Estado ------------- // 
    const [items, setItems] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    /* ----------------------------------------------
    /* Generar efecto de desmontaje // 
     * Luego del primer renderizado se produce un segundo rendering para cambiar de estado,
     * A veces se produce sin intencion y causan bugs o perdida no intencionada de estados
     * ---------------------------------------------- 
    */

    /**
     * ----------------------------------------
     * Condicional para verificar si el id recibido es igual al selecionado
     * ----------------------------------------
     */
    useEffect(() => {
        gFetch()
            // --------------- condicional dentro del rendering ------------- // 
            .then((res) => {
                if (id) {
                    setItems(res.filter((item) => item.categoria === id))
                } else {
                    setItems(res)
                }
            })
            .finally(() => setLoading(false))
    }, [id])


    return (
        // --------------- Retornar el Dom ------------- // 
        // --------------- Ocultar/mostrar nodos del render ------------- // 
        <div className=' h-screen'>
            {loading
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