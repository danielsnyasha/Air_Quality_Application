import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import image1 from './images/32821.jpg'
import { useNavigate } from 'react-router-dom';
import {CSVLink} from 'react-csv'


function App() {
  let history = useNavigate()
  const [data,setData] = useState({})
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  const toLanding=()=>{
    history('/')
  }
  const toMap =()=>{
    history('/map')
  }


  //const url = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=982497db-70b3-4a08-a302-ceefd893b17c`

    //const url = `http://api.ambeedata.com/latest/by-lat-lng?lat=${lat}&lng=${long}=39773f7a792d4723c5a5d969165b939f9d2904d5748cb642fff6b274401c46ed`

  //const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=eb93f08eb82f6654c5475a460ef9230d`

  const url = `https://api.weatherbit.io/v2.0/current/airquality?lat=${lat}&lon=${long}&key=xxxxxxxxxxxxxxxxxxxxxxx`

  const searchLocation = (event)=>{
    
      axios.get(url).then((response)=>{
        setData(response.data)
        
        console.log(response.data)
        
      })
      setLat('')
      setLong('') 
  }

// var value = {aqi: data.data[0].aqi}


  const db_url = "http://localhost:3008/responses";

  const Post = () =>{
    axios.post(db_url, {
      aqi: data.data[0].aqi,
      so2: data.data[0].so2,
      no2: data.data[0].no2,
      o3: data.data[0].o3,
    }).then((response) => {
      console.log(response);
      if (response){
        alert("Data And Coordinates Sent To Database")
      }else{
        alert("Check Connection To Database")
      }
      
      
    });
  };

  return (
    <div className="App">
      
      <div className='Cover'>
        {/* <div className='top_left'>



        </div> */}

        <div className='TopContainer'>
            <h1>Finland Air Quality Data</h1>
        </div>

        <div onClick={toMap} className='top_right'></div>
      </div>


      
      <div className='Container'>
        <div className='left'>
        <div className='left-inner'>
            <h1 className='left_text'> Latitude(WGS84)</h1>
            <input
            value={lat}
            onChange={event => setLat(event.target.value)}
            placeholder='Enter Latitude'
            /> 
          </div>
          <div className='left-inner'>
            <h1 className='left_text'>Longitude(WGS84)</h1>
            <input
            value={long}
            onChange={event => setLong(event.target.value)}
            placeholder='Enter Longitude'
           
            />
          </div>
          <button 
            className='button'
            onClick={searchLocation}
            >Search</button>

          
        </div>
        <div className='right'>
          <div className='right-inner'>
            <h1 className='right_text'>City</h1>
            <h1 className='right_text'>{data.city_name} </h1>
          </div>
          <div className='right-inner'>
            <h1 className='right_text'>Timezone</h1>
            <h1 className='right_text'>{data.timezone}</h1>
          </div>
          <div className='right-inner'>
            <h1 className='right_text'>Air Quality Index</h1>

            {/* <h1 className='right_text_aqi'>{data.data[0].aqi}</h1> */}

            {data.data? <h1 className='right_text_aqi'>{data.data[0].aqi}</h1> : null } 
          
            {/* <h1 className='right_text_aqi'>{data && data[0].aqi}</h1> */}
          </div>
          <div className='right-inner'>
            <h1 className='right_text'>Ozone</h1>
            {data.data ? <h1 className='right_text'>{data.data[0].o3}</h1> : null }
          </div>
          <div className='right-inner'>
            <h1 className='right_text'> Sulphur Dioxide</h1>
            {data.data ? <h1 className='right_text'>{data.data[0].so2}</h1> : null }
          </div>
          <div className='right-inner'>
            <h1 className='right_text'>Nitrogen Dioxide</h1>
            {data.data ? <h1 className='right_text'>{data.data[0].no2}</h1> : null }
          </div>
          <div className='right-inner'>
            {/* <h1 className='right_text'>Note:</h1> */}
            {data.country_code==='FI' ? <h1 className='right_text'></h1> : <h1 className='right_text1'>Coordinates Are Not From Finland</h1> }
          </div>
          {/* <button onClick={Post} className='right-button'>Post</button> */}
        </div>

      </div>
    </div>
  );
}

export default App;
