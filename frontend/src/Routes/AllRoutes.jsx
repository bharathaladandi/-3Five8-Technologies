import React from "react";
import {Routes, Route} from "react-router-dom"
import { Booking } from "../Components/Booking";

export const AllRoutes = () => {

    return(
        <div>
            <Routes>
                <Route path='/' element={<Booking />}> </Route>
            </Routes>
        </div>
    )
}