import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from 'react';
/* ----------Telas e Layout-------- */
import Header from './layout/Header'
import Cars from './Cars'
import Brand from './Brand'
import NewBrand from './NewBrand'
import NewCar from './NewCar'

export default function App() {
    const [cars, setCar] = useState([]);
    const [brands, setBrands] = useState([])
    useEffect(() => {
        const promise = axios.get("http://localhost:3000/cars");
        promise.then((response) => {
            setCar(response.data)
        });
    }, []);
    useEffect(() => {
        const promise = axios.get("http://localhost:3000/brands");
        promise.then((response) => {
            setBrands(response.data)
        });
    }, []);

    return (
        <BrowserRouter>
            <main>
                <Header />
                <Routes>
                    <Route exact path="/cars" element={< Cars cars={cars} />} />
                    <Route path="/cars/brand" element={< Brand brands={brands} />} />
                    <Route path="/cars/newbrand" element={< NewBrand />} />
                    <Route path="/cars/newcar" element={< NewCar cars={cars} brands={brands} />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

