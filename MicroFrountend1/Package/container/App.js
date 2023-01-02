import React from "react";
import {  BrowserRouter 
,Routes,Route} from "react-router-dom"
import Index from "./src/index"


export default ()=>{

    return ( <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}>

                </Route>
            </Routes>
            </BrowserRouter>)
}