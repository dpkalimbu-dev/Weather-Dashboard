import React from 'react';


function WeatherBody({ data, unit }) {
    if (!data) return <p>Loading...</p>;
    
    const { name, main, weather, wind } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
    const tempSymbol = unit === "metric" ? "°C" : "°F";
    const weatherMain = data.weather[0].main.toLowerCase();

    return (
<div className={`card shadow-lg p-4 text-center weather-card ${weatherMain}`}>
        
            <div className="glass-overlay p-4 rounded-4">
    <h2 className="fw-bold">{name}</h2>
            
            <img 
                src={iconUrl} 
                alt={weather[0].description} 
                className="img-fluid drop-shadow mx-auto" 
                style={{ width: '120px' }} 
            />

            <h3 className="display-1 fw-bold">
                {Math.round(main.temp)}{tempSymbol}
            </h3>

            <p className="text-capitalize h4 text-muted">{weather[0].description}</p>
            
         <div className="row mt-4 pt-3 border-top border-dark border-opacity-10">
    <div className="col border-end">
        <p className="small text-uppercase fw-bold text-muted mb-1">Humidity</p>
        <h5 className="mb-0">{main.humidity}%</h5>
    </div>
    <div className="col">
        <p className="small text-uppercase fw-bold text-muted mb-1">Wind Speed</p>
        <h5 className="mb-0">{wind.speed} <small>{unit === 'metric' ? 'km/h' : 'mph'}</small></h5>
    </div>
</div>
    </div>
    </div>
    );
}

export default WeatherBody;