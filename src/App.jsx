
import React, { createContext } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './container/ComponentsNavBar/NavBar'
import ExampleSection from './container/ComponentsExampleSection/Section'
import ItemListContainer from './container/ItemsListContainer/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'

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
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:id' element={<ItemListContainer/>} />
                <Route path='/Item/:id' element={<ItemDetailContainer/>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>


        </BrowserRouter>
    )
}

export default App