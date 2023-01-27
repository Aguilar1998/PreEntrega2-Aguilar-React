import React, { createContext } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './container/ComponentsNavBar/NavBar'
import { ComponentHome } from './container/ComponentHome/ComponentHome'
import CardsSketch from './container/cardContainer/CardSketch'
import CardsFrontEnd from './container/cardContainer/CardFrontEnd'
import ExampleSection from './container/ComponentsExampleSection/Section'

// ---------------Context nuevo-------------//

const AppContext = createContext([])

// ---------------Context nuevo-------------//
// raft 

const App = () => {
    console.log(AppContext);
    return (
        <BrowserRouter className='container mx-auto'>
            
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