import { useEffect, useState } from 'react'
import './style.css'
import { FaSearch } from "react-icons/fa";
import { FaWind } from 'react-icons/fa';
 
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, } from "react-icons/fa"
 
export default function WeatherApp(){

        const [weatherData,setWeatherData] = useState(null);
        const [city,setCity] = useState('Belgrade');
        const [error,setError] = useState('')
        const API_KEY = '7301fc653818b159eae6acc6275adba1';


            function convertToCelsius(kelvin){
                return (kelvin - 273.15);
            }
       async function fetchData(){
            if(!city) return;
            else{
                try{
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
                    const data = await response.json()
                    setWeatherData(data);
                    console.log(data)
                }catch(error){
                    setError(error);

                }
            }
            
        }

      
       const handleKey = (e) =>{
        if (e.key === 'Enter'){
            fetchData()
        }
       }

        const kelvin = weatherData?.main?.temp
        const celzijus = kelvin ? convertToCelsius(kelvin).toFixed(0) : null

        return (
            <div className="weather-app">
                <div className="user-input">
                <input onChange={(e) => setCity(e.target.value)} placeholder='Please write city ' type="text"  value={city} onKeyDown={handleKey} />
                <div className='search'>
                <FaSearch onClick={fetchData}  />
                </div> 
                </div>
                
            <div className="weather-icon">
                {weatherData?.weather?.[0]?.main === 'Clouds' ? (<FaCloud/>):
                weatherData?.weather?.[0]?.main === 'Rain' ? (<FaCloudRain/>):
                weatherData?.weather?.[0]?.main === 'Snow' ? (<FaSnowflake/>):
                weatherData?.weather?.[0]?.main === 'Clear' ? (<FaSun/>):
                weatherData?.weather?.[0]?.main === 'Fog' ? (<FaCloud/>)
                : null}
            <span>{weatherData? weatherData.weather[0].description :null}</span>
            </div>
            <div className="information">
                <p>{celzijus ? `${celzijus}°C` : ''}</p>
                <h2>{weatherData ? weatherData.name: null}</h2>
                <div className="spec-info">
                    <span>Wind speed {weatherData? (<> <FaWind/> {weatherData.wind.speed}  </>):null} m/s</span>
                    
                </div>

            </div>

{error && <div className="error">{error}</div>}

 

            </div>
        )
        }

