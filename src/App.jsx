
// import React, { createContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { useInitialState } from './container/ComponentsCart/useInitialState'
import { CartContainer } from './container/ComponentsCart/CartContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './container/ItemsListContainer/ItemListContainer'
import ExampleSection from './container/ComponentsExampleSection/Section'
import NavBar from './container/ComponentsNavBar/NavBar'
import Login from './page/Login'
import { CartProvider } from './Context/CartContext'
import { createContext } from 'react'
// import AppContext from './Context/AppContext'



const  CartContext = createContext()



const App = () => {
    console.log(CartContext);
    // ---------------- Nuevo Context ---------------- //

    // const initialState = useInitialState()

    // ---------------- Nuevo Context ---------------- //
    return (
        // <AppContext.Provider value={initialState}>
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
        // </AppContext.Provider>
    )
}

export default App



