import './App.css';

import TopButtons from "./components/TopButtons/TopButtons";
import Inputs from "./components/Inputs/Inputs";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails
    from "./components/TemperatureAndDetails/TemperatureAndDetails";
import Forecast from "./components/Forecast/Forecast";
import getFormattedWeatherData from "./services/WeatherService";
import {useEffect, useState} from "react";


function App() {

    const [query, setQuery] = useState({q: 'kyiv'});
    const [units, setUnits] = useState('metric');
    const [lang, setLang] = useState('ua');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query,lang,units,}).then((data)=>{
                setWeather(data)}
            )
        };
        fetchWeather();
    }, []);

    return (<div
        className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">

        <TopButtons/>
        <Inputs/>

        {weather && (
            <>
                <TimeAndLocation weather={weather}/>
                <TemperatureAndDetails weather={weather}/>
                <Forecast title="Hourly forecast"/>
                <Forecast title="daily forecast"/>
            </>
        )}

    </div>);
}

export default App;
