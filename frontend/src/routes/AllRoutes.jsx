import React from 'react'
import { Routes, Route } from "react-router-dom"
import Car from '../components/Car-pages/Car'
import Singlecar from '../components/Car-pages/Singlecar'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import HomePage from '../pages/HomePage'


const AllRoutes = () => {


    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/car" element={<Car />}></Route>
                <Route path="/car/:car_id" element={<Singlecar/>}></Route>

 
            </Routes>


        </div>
    )
}

export default AllRoutes