import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "../components/Home";
import APIDetails from "../services/APIDetails";

const Paths=()=>{
    return(
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/poke-info/:pokeIndex/:pokeName" element={<APIDetails/>} />        
    </Routes>
    );    
}
export default Paths;