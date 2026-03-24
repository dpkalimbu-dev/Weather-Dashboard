import React, { useState, useEffect } from 'react';

function WeatherSearch({ onSearch }) {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1); 
    const API_KEY = '497c2e51cbb5f63ac59791e74c507614';

    useEffect(() => {
        if (input.length < 3) {
            setSuggestions([]);
            return;
        }
        const fetchCities = async () => {
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();
            setSuggestions(data);
            setActiveIndex(-1); 
        };
        const timeoutId = setTimeout(fetchCities, 500);
        return () => clearTimeout(timeoutId);
    }, [input]);

    const handleSelect = (city) => {
        onSearch(`${city.name},${city.country}`);
        setInput('');
        setSuggestions([]);
        setActiveIndex(-1);
    };

    const handleKeyDown = (e) => {
        
        if (e.key === "ArrowDown") {
            setActiveIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
        } 
        
        else if (e.key === "ArrowUp") {
            setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
        } 
        
        else if (e.key === "Enter") {
            if (activeIndex >= 0 && suggestions[activeIndex]) {
                handleSelect(suggestions[activeIndex]);
            } else if (input.trim()) {
                onSearch(input);
                setInput('');
            }
        }
        
        else if (e.key === "Escape") {
            setSuggestions([]);
        }
    };

    return (
        <div className="search-container position-relative">
            <h5 className="mb-3">Find a City</h5>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search city..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />
            </div>

            {suggestions.length > 0 && (
                <ul className="list-group position-absolute w-100 mt-1 shadow-lg" style={{ zIndex: 1000 }}>
                    {suggestions.map((city, index) => (
                        <li 
                            key={index} 
                            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${index === activeIndex ? 'active' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleSelect(city)}
                            onMouseEnter={() => setActiveIndex(index)} 
                        >
                            <div>
                                <strong>{city.name}</strong>
                                {city.state && <small className={index === activeIndex ? "text-white-50" : "text-muted"}>, {city.state}</small>}
                            </div>
                            <span className={`badge rounded-pill ${index === activeIndex ? 'bg-light text-primary' : 'bg-primary'}`}>
                                {city.country}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default WeatherSearch;