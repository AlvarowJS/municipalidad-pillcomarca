import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/home'
import Navbar from '../components/navbar'
import SobreNosotros from '../pages/SobreNosotros'
import Historia from '../pages/Historia'


const AppRouter = () => {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/historia' element={<Historia />} />
                    <Route path='/sobrenosotros' element={<SobreNosotros />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter