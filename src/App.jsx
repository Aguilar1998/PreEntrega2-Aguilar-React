import React, { createContext } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/ComponentsNavBar/NavBar'
import { ComponentHome } from './components/ComponentHome/ComponentHome'
import CardsSketch from './components/ComponentsCard/CardSketch'
import CardsFrontEnd from './components/ComponentsCard/CardFrontEnd'
import ExampleSection from './components/ComponentsExampleSection/Section'

// ---------------Context nuevo-------------//

const AppContext = createContext([])

// ---------------Context nuevo-------------//
// raft 

const App = () => {
    console.log(AppContext);
    return (
        <BrowserRouter className='container mx-auto'>
            {
                
            /* <AppContenxt.Provider value={{
                products,
                saludo
            }}>
                <CardFrontEnd/>
            </AppContenxt.Provider> */
                
            }
            
            <NavBar />
            <ExampleSection />
            
            <Routes>
                
                <Route path='/' element={<ComponentHome />} />
                
                <Route path='/sketch' element={<CardsSketch/>}/>
                <Route path='/FrontEnd' element={<CardsFrontEnd/>}/>
                
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>


        </BrowserRouter>
    )
}

export default App