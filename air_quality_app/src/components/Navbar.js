import React, { useEffect, useState } from 'react';
import './Navbar.css';

import { useNavigate } from 'react-router-dom';

function Navbar({history}) {
    let navigate = useNavigate()
    function toHome() {
        navigate('/')
      }
    const toMap =()=>{
        
        navigate('/map')
    }
    const toQuality =()=>{
        
        navigate('/quality_index')
    }


    return(
        <div className = 'navbar_container'>
            <h1 onClick={toHome} className='navbar_text'>Home</h1>
            <h1 onClick={toQuality} className='navbar_text'>Air-Quality</h1>
            <h1 onClick={toMap} className='navbar_text'>Map</h1>



        </div>    
        
            

            



    )}
export default Navbar;