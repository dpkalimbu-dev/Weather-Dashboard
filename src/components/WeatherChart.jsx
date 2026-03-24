import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function WeatherChart({ data, unit }) {
   
    const unitLabel = unit === 'metric' ? '°C' : '°F';

    return (
        <div className="card shadow-sm border-0 p-4 mt-4 bg-white bg-opacity-75" style={{ borderRadius: '15px' }}>
            <h6 className="text-muted text-uppercase small fw-bold mb-4">24-Hour Temperature</h6>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart data={data} margin={{ right: 30, left: 0 }}>
                        <defs>
                            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="30%" stopColor="#0d6efd" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#0d6efd" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis 
                            dataKey="time" 
                            axisLine={true} 
                            tickLine={true} 
                            tick={{fill: '#6c757d', fontSize: 12}}
                            dy={10}
                        />
                        <YAxis 
                            orientation="left"
                            tickFormatter={(value) => `${value}${unitLabel}`}
                            axisLine={true}
                            tickLine={true}
                            tick={{fill: '#6c757d', fontSize: 12}}
                            domain={['auto', 'auto']}
                        />
                        <Tooltip 
                            formatter={(value) => [`${value}${unitLabel}`, "Temperature"]}
                            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,1,1,0.1)' }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="temp" 
                            stroke="#0d6efd" 
                            strokeWidth={3} 
                            fillOpacity={1} 
                            fill="url(#colorTemp)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default WeatherChart;