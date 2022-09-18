import './App.css';

import TopButtons from "./components/TopButtons/TopButtons";
import Inputs from "./components/Inputs/Inputs";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails
    from "./components/TemperatureAndDetails/TemperatureAndDetails";
import Forecast from "./components/Forecast/Forecast";
import getFormattedWeatherData from "./services/WeatherService";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from "react";


function App() {
    const [query, setQuery] = useState({q: 'вінниця'});
    const [units, setUnits] = useState('metric');

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {

            const message = query.q ? query.q : 'поточне місцезнаходження';

            toast.info('Отримуєм погоду для' + ' ' + message);
            await getFormattedWeatherData({...query, units,}).then((data) => {
                toast.success(`Вдало отримана погода для ${data.name},${data.country}`)
                    setWeather(data);
                }
            );
        };
        fetchWeather();
    }, [query, units]);

    const formatBackground = () => {
        if (!weather) return 'from-cyan-700 to-blue-700';
        const thresholds = units === 'metric' ? 20 : 50;
        if (weather.temp <= thresholds) return 'from-cyan-700 to-blue-700';

        return 'from-yellow-700 to-orange-700';
    };
    return (
        <div
            className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>

            <TopButtons query={query} setQuery={setQuery}/>
            <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

            {weather && (
                <>
                    <TimeAndLocation weather={weather}/>
                    <TemperatureAndDetails weather={weather}/>
                    <Forecast title="Hourly forecast" items={weather.hourly}/>
                    <Forecast title="daily forecast" items={weather.daily}/>
                </>
            )}
            <ToastContainer

                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>);
}

export default App;
