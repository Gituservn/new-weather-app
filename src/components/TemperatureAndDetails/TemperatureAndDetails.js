import React from 'react';
import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset} from "@iconscout/react-unicons";
import {formatToLocalTime} from "../../services/WeatherService";

function TemperatureAndDetails({weather: {details, icon, temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className="w-20"/>
                <p className="text-5xl">{Math.round(temp)}°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Real Fell:
                        <span className="font-medium ml-1">{Math.round(feels_like)}°</span>

                    </div>
                    <div className="flex font-light text-sm items-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity:
                        <span className="font-medium ml-1">{humidity}%</span>

                    </div>
                    <div className="flex font-light text-sm items-center">
                        <UilWind size={18} className="mr-1"/>
                        Wind:
                        <span className="font-medium ml-1">{speed} km/h</span>

                    </div>

                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
                <UilSun/>
                <p className="font-light">Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise)} AM</span></p>
                <p className="font-light">|</p>

                <UilSunset/>
                <p className="font-light">Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset)} PM</span></p>
                <p className="font-light">|</p>

                <UilArrowUp/>
                <p className="font-light">High: <span className='font-medium ml-1'>{temp_max}°</span></p>
                <p className="font-light">|</p>

                <UilArrowDown/>
                <p className="font-light">Low: <span className='font-medium ml-1'>{temp_min}°</span></p>
                <p className="font-light">|</p>
            </div>

        </div>
    );
}

export default TemperatureAndDetails;