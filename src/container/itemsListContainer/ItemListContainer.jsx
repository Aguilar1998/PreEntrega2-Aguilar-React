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
    // const [errorMesage, setErrorMessage] = useState(null)

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
        // --------------- Detectar errores ------------- // 
            // .catch((errorMesage) => {setErrorMessage(`Error ${errorMesage}`)})
            // --------------- Al finalizar la recarga corta el loading ------------- // 
            .finally(() => setLoading(false))
    }, [id])


    // if (errorMesage !== null) return <div>
    //     <h2>Error</h2>
    //     <p>{errorMesage}</p>
    // </div>


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