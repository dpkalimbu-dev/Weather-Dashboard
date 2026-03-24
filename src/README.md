🌤️ Weather Dashboard

A responsive, real-time weather dashboard built with React and the OpenWeatherMap API. It delivers live weather conditions, hourly forecasts, and an interactive temperature chart — all wrapped in a modern glassmorphism UI.

🚀 Features
🔍 Smart City Search

- Debounced autocomplete search (500ms delay) powered by the OpenWeatherMap Geocoding API
- Displays up to 5 city suggestions with state and country badges
- Full keyboard navigation support — ↑ ↓ to browse, Enter to select, Escape to dismiss
- Mouse hover and click support with active highlight states

📍 Auto Location Detection

- Uses the browser Geolocation API to detect and load the user's current city on page load
- Gracefully falls back to a default city (Calgary) if location permission is denied

🌡️ Current Weather Display

- Shows city name, weather icon, temperature, and description
- Displays humidity and wind speed in a clean stat grid
- Dynamic weather-condition theming — card background and styling change based on live conditions (e.g. rain, clear, clouds, snow)

📅 Hourly Forecast Sidebar

- Displays the next 5 forecast intervals from the OpenWeatherMap Forecast API
- Each entry shows: weather icon, time, temperature, feels-like temp, humidity, and wind speed
- Fully responsive to the selected unit (metric/imperial)

📈 24-Hour Temperature Chart

- Interactive area chart built with Recharts
- Gradient fill under the temperature curve for visual depth
- Dynamic Y-axis labels that update with the selected unit
- Custom-styled tooltip with rounded corners and soft shadow

⚙️ Unit Toggle

- One-click toggle between Celsius (°C) and Fahrenheit (°F)
- All values across every component update simultaneously on change

🕓 Recent Search History

- Stores up to 3 unique recent searches in localStorage
- Persists across browser sessions
- Pill-style quick-select buttons for one-click reloading
- One-click Clear History button

💀 Skeleton Loading Screen

- Custom Bootstrap placeholder-glow skeleton that mirrors the exact layout of the weather card
- Prevents layout shift while API data is loading
- Smooth transition from skeleton to live data

📸 Screenshots

![Autocomplete Dropdown](<src/assets/Screenshot 2026-03-24 105911.png>)
![sidebar with the city search input](<src/assets/Screenshot 2026-03-24 105957.png>)
![Hourly Forecast Sidebar](<src/assets/Screenshot 2026-03-24 110006.png>)
![Temperature Chart](<src/assets/Screenshot 2026-03-24 110035.png>)
![ Weather Card](<src/assets/Screenshot 2026-03-24 110045.png>)
![alt text](<assets/Screenshot 2026-03-24 104421.png>)

[[Live demo](https://dpkalimbu-dev.github.io/Weather-Dashboard/)]
