
import React, { createContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContainer } from './container/ComponentsCart/CartContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './container/ItemsListContainer/ItemListContainer'
import ExampleSection from './container/ComponentsExampleSection/Section'
import NavBar from './container/ComponentsNavBar/NavBar'
import Login from './page/Login'
import { CartProvider } from './Context/CartContext'




// ---------------- Nuevo Context ---------------- //

const  CartContext = createContext()

// ---------------- Nuevo Context ---------------- //



const App = () => {
    console.log(CartContext);
    return (
            <CartProvider>
                <BrowserRouter className='container mx-auto'>
                    <NavBar />
                    <ExampleSection />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/category/:id' element={<ItemListContainer />} />
                        <Route path='/Item/:id' element={<ItemDetailContainer />} />
                        <Route path='*' element={<Navigate to='/' />} />
                        <Route path='/CartContainer' element={<CartContainer />} />
                        <Route path='/Login' element={<Login />} />
                    </Routes>

                </BrowserRouter>
            </CartProvider>
    )
}

export default App



