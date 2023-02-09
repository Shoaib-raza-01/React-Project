import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Components/Todo'
// import ClockTimmer from './Components/ClockTimmer';
import ProductsAPI from './Components/ProductsAPI';
// import Usereff from './Components/Usereff';
// import CompA  from './Components/CompA';
// import Navbar from './Components/Navbar';
import ProductPage from './Components/ProductPage';
import Card from './Components/Card';
import NotFoundPage from './Components/NotFoundPage';

export default function App(props) {
    return (
        // <div>
            // <Navbar />
        //     {/* <Todo /> */}
        //     {/* <ClockTimmer /> */}
        //     {/* <Usereff /> */}
        //     <ProductsAPI />
        //     {/* <CompA /> */}
        // </div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<ProductsAPI />}/>
                <Route path='/todo' element = {<Todo />} />
                <Route path='/products/:id' element = {<ProductPage />} />
                <Route path = '/card' element={<Card />}/>

{/* handle 404 error  */}
                <Route path='*' element = {<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}