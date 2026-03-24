import React, { useState, useEffect } from 'react';

import  './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherSearch from './components/WeatherSearch'; 
import WeatherBody from './components/WeatherBody'; 
import WeatherSettings from './components/WeatherSettings'; 
import WeatherSkeleton from './components/WeatherSkeleton'; 
import RecentSearches from './components/RecentSearches';
import WeatherChart from './components/WeatherChart';
import ForecastSidebar from './components/ForcastSidebar';

function App() {
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Calgary');
  const [unit, setUnit] = useState('metric');
  const [hasSearched, setHasSearched] = useState(false);
  const API_KEY = '497c2e51cbb5f63ac59791e74c507614';


    
          const [recentSearches, setRecentSearches] = useState(() => {
              const saved = localStorage.getItem("recentWeatherSearches");
              return saved ? JSON.parse(saved) : [];
          });

          const addToRecent = (newCity) => {
              setRecentSearches((prev) => {
                 if (prev.includes(newCity)) return prev;

        const updated = [newCity, ...prev].slice(0, 3);
        localStorage.setItem("recentWeatherSearches", JSON.stringify(updated));
        return updated;
              });
          };

                    const clearHistory = () => {
                setRecentSearches([]);
                localStorage.removeItem("recentWeatherSearches");
            };

  
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      setCity(data.name); 
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const fetchWeatherByName = async (error) => {
    console.log("Location denied, using default.");
    setCity('Calgary');
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.log("Location denied, using default.");
          fetchWeatherByName(city);
        }
      );
    }
  }, []); 

  
  useEffect(() => {
   const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;
        const currentRes = await fetch(currentUrl);
        const currentData = await currentRes.json();
        
        if (currentData.cod === "404") {
            setError("City not found.");
            setLoading(false);
            return;
        }
                  setWeatherData(currentData);
          if (hasSearched) {
              addToRecent(city);  
          }

        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`;
        const forecastRes = await fetch(forecastUrl);
        const forecastDataRaw = await forecastRes.json();
        
      
      const simplifiedForecast = forecastDataRaw.list.slice(0, 5).map(item => ({
          time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          temp: Math.round(item.main.temp),
          feels_like: Math.round(item.main.feels_like),
          humidity: item.main.humidity,
          wind: Math.round(item.wind.speed),
          icon: item.weather[0].icon
      }));
        
        setForecastData(simplifiedForecast);
        setLoading(false);
    } catch (err) {
        setError("Network error.");
        setLoading(false);
    }
};


    fetchWeather();
  }, [city, unit]); 


  return (
   <div className="pb-5">
      <div className="weather-header text-center mb-5">
          <div className="container">
            <h1 className="display-3 fw-bold">Weather Dashboard</h1>
      <p className="opacity-75">Live Data for {city.split(',')[0]}</p>          </div>
      </div>
      <div className="container">
        <main className="row g-4">

 
  <div className="col-lg-4 d-flex flex-column">

    
    <div className="card shadow-sm p-4 mb-3 border-0">
      <WeatherSearch onSearch={(city) => {
        setHasSearched(true); 
        setCity(city);
      }} />

      <hr className="my-4 opacity-10" />

      <WeatherSettings unit={unit} onUnitChange={setUnit} />

      <RecentSearches
        searches={recentSearches}
        onSelect={(city) => {
          setHasSearched(true);  
          setCity(city);
        }}
        onClear={clearHistory}
      />
    </div>

    
    <div style={{ marginTop: "auto" }}>
      {forecastData.length > 0 && (
        <div className="card shadow-sm p-3 border-0">
          <ForecastSidebar data={forecastData} unit={unit} />
        </div>
      )}
    </div>

  </div>

  
  <div className="col-lg-8">

    {error && <div className="alert alert-danger">{error}</div>}

    {loading ? (
      <WeatherSkeleton />
    ) : (
      <>
       
        <div className="mb-3">
          <WeatherBody data={weatherData} unit={unit} />
        </div>

       
        {forecastData.length > 0 && (
          <div>
            <WeatherChart data={forecastData} unit={unit} />
          </div>
        )}
      </>
    )}

  </div>

</main>
        </div>
    </div>
  );
}

export default App;