import React, { createContext } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './Container/ComponentsNavBar/NavBar'
import ExampleSection from './Container/ComponentsExampleSection/Section'
import { ItemListAws } from './Container/ItemsListContainer/ItemListAws'
import { ItemListFrontEnd } from './Container/ItemsListContainer/ItemListFrontEnd'
import { ItemListSketch } from './Container/ItemsListContainer/ItemListSketch'
import ItemDetailAWS from './Container/ItemDetailContainer/ItemDetailAWS'
import ItemDetailFrontEnd from './Container/ItemDetailContainer/ItemDetailFrontEnd'
import ItemDetailSketch from './Container/ItemDetailContainer/ItemDetailSketch'

// ---------------Context nuevo-------------//

const AppContext = createContext([])

// ---------------Context nuevo-------------//


const App = () => {
    console.log(AppContext);
    return (
        <BrowserRouter className='container mx-auto'>
            
            <NavBar />
            <ExampleSection />
            
            <Routes>

                <Route path='/Item/:id' element={<ItemDetailAWS/>} />
                <Route path='/Item/:id' element={<ItemDetailFrontEnd/>} />
                <Route path='/Item/:id' element={<ItemDetailSketch/>} />
                <Route path='*' element={<Navigate to='/' />} />
                <Route path='/' element={<ItemListAws/>} ></Route>
                <Route path='/ItemListSketch' element={<ItemListSketch/> }></Route>
                <Route path='/ItemListFrontEnd' element={<ItemListFrontEnd/> }></Route>
            </Routes>


        </BrowserRouter>
    )
}

export default App