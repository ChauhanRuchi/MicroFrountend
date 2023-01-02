import React from "react";
import {  BrowserRouter 
,Routes,Route} from "react-router-dom"
import Lading from "../src/components/Landing"
import Pricing from "../src/components/Pricing"

export default ()=>{

    return ( <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lading/>}>
                   <Route  path="/signup" element={<Pricing/> } />

                </Route>
            </Routes>
            </BrowserRouter>)
}
    