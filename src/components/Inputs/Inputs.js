import React from 'react';
import {useState} from "react";
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons";
import {toast} from "react-toastify";

const Inputs = ({setQuery, units, setUnits}) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city !== '') setQuery({q: city});
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
           handleSearch()
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info("Визначаем місцерозташування корустувача")
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon
                });
            });
        }
    };

    const handleUnitsChange = (e) => {
        const selectUnits = e.currentTarget.name;
        if (units !== selectUnits) setUnits(selectUnits);


    };

    return (
        <div className="flex flex-row justify-center my-6">
            <div
                className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="search for city..."
                    type="text"
                    className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
                />
                <UilSearch onClick={handleSearch} size={25}
                           className="text-white cursor-pointer transition ease-out hover:scale-125"/>
                <UilLocationPoint
                    onClick={handleLocationClick}
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            </div>

            <div className="flex flex-row w-1/4 items-center justify-center">
                <button
                    name="metric"
                    className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-90"
                    onClick={handleUnitsChange}

                >°C
                </button>
                <p className="text-white text-xl mx-1">|</p>
                <button
                    name="imperial"
                    className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-90"
                    onClick={handleUnitsChange}>
                    °F
                </button>
            </div>
        </div>
    );
};

export default Inputs;
