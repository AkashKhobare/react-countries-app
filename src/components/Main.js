import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Countries } from "./Countries";
import { AppNavbar } from "./AppNavbar";
import { CountryDetails } from "./CountryDetails";

const Main = () => {

    return (
        <>
        <AppNavbar />
        <BrowserRouter>
            <Routes>
                <Route path="/countries" element={<Countries />} />
                <Route path="/countries/:countryCode" element={<CountryDetails />} />
                <Route exact path="/" element={<Navigate to="/countries" replace />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Main;