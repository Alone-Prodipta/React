import React from "react";
import header from './components/header/header.jsx';
import footer from './components/footer/footer.jsx';

import { Outlet } from "react-router-dom";
 function Index()
 {
    return(
        <>
            <header />
            <Outlet />
            <footer />
        </>
    )
 }
 export default Index;