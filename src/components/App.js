import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './layout/Header'
import Cars from './Cars'
import Brand from './Brand'
import NewBrand from './NewBrand'

export default function App() {

    return (
        <BrowserRouter>
        <main>
            <Header/>
            <Routes>
                <Route path="/cars" element= {< Cars/>} />
                <Route path="/cars/brand" element = {< Brand/>} />
                <Route path="/cars/newbrand" element = {< NewBrand/>} />
            </Routes>
        </main>
        </BrowserRouter>
    );
}

