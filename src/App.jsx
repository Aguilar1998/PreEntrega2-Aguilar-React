

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './container/ComponentsNavBar/NavBar'
import ExampleSection from './container/ComponentsExampleSection/Section'
import ItemListContainer from './container/ItemsListContainer/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './container/ComponentsCart/CartContainer'
import { createContext } from 'react'


// ---------------Context nuevo-------------//


const AppContext = createContext([])


// ---------------Context nuevo-------------//


const App = () => {
    console.log(AppContext);
    return (
        
        <BrowserRouter className='container mx-auto'>

            <CartProvider>

                <NavBar />
                <ExampleSection />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:id' element={<ItemListContainer />} />
                    <Route path='/Item/:id' element={<ItemDetailContainer />} />
                    <Route path='*' element={<Navigate to='/' />} />
                    <Route path='/CartContainer' element={<CartProvider/>} />
                </Routes>

            </CartProvider>

        </BrowserRouter>
    )
}

export default App



