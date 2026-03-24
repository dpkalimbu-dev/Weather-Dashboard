import React from 'react';

function WeatherSettings({ unit, onUnitChange }) {
    return (
        <div className="weather-settings mt-3">
            <h6 className="text-muted mb-2">Unit Settings</h6>
            <div className="btn-group w-100" role="group" aria-label="Unit toggle">
                <button 
                    type="button" 
                    className={`btn ${unit === 'metric' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => onUnitChange('metric')}
                >
                    Celsius (°C)
                </button>
                <button 
                    type="button" 
                    className={`btn ${unit === 'imperial' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => onUnitChange('imperial')}
                >
                    Fahrenheit (°F)
                </button>
            </div>
            <small className="text-muted d-block mt-2 text-center">
               
            </small>
        </div>
    );
}

export default WeatherSettings;