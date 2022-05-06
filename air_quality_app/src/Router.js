import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import Leaflet from './screens/leaflet';
import Navbar from './components/Navbar';
import Quality from './components/Quality';


function MyRouter(){
    return(
        
        
        <Router>
        <Navbar />
        <Routes>
            <Route path ="/" exact element={<App/>}/>
            <Route path ="/map" exact element={<Leaflet/>}/>
            <Route path="/quality_index" exact element={<Quality/>}/>

        </Routes>

          
      </Router>
     

    )};

export default MyRouter;

