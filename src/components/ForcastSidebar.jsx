import React from 'react';

function ForecastSidebar({ data, unit }) {
    const tempUnit = unit === 'metric' ? '°C' : '°F';
    const windUnit = unit === 'metric' ? 'km/h' : 'mph';

    return (
        <div className="card shadow-sm border-0 h-100 bg-white bg-opacity-75" style={{ borderRadius: '15px',  background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(8px)',
                height: '100%' }}>
            <div className="card-body p-3"  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}>
                <h6 className="text-muted text-uppercase small fw-bold mb-3 border-bottom pb-2"style={{ flexShrink: 0 }}>Hourly forecast</h6>
                <i class="bi bi-clock" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}></i>
                <ul className="list-unstyled mb-0"  style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    }}>
                    {data.map((hour, index) => (
                        <li key={index} 
                        className={`py-2 ${index !== data.length - 1 ? 'border-bottom border-light' : ''}`}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <div className="d-flex align-items-center">
                                    <img 
                                        src={`https://openweathermap.org/img/wn/${hour.icon}.png`} 
                                        alt="weather icon" 
                                        style={{ width: '30px', marginRight: '5px' }} 
                                    />
                                    <span className="fw-bold text-primary small">{hour.time}</span>
                                </div>
                                <span className="fw-bold h6 mb-0">{hour.temp}{tempUnit}</span>
                            </div>
                            <div className="d-flex justify-content-between text-muted px-1" style={{ fontSize: '0.75rem' }}>
                                <span>Feels: {hour.feels_like}{tempUnit}</span>
                                <span><i className="bi bi-droplet"></i>Humidity: {hour.humidity}%</span>
                                <span><i className="bi bi-wind"></i>Wind speed: {hour.wind}{windUnit}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ForecastSidebar;