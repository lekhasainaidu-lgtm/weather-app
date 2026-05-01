# â›… Weather App

A beautiful, responsive weather application with 7-day forecasts, location search, and animated weather conditions.

## ðŸš€ Tech Stack

- **Frontend:** React.js
- **API:** OpenWeather API
- **Styling:** CSS3 (animations, glassmorphism)

## âœ¨ Features

- Current weather with feels-like, humidity, wind speed
- 7-day forecast
- City search with autocomplete
- Geolocation support (auto-detect location)
- Animated weather icons (sunny, rainy, cloudy, snow)
- Toggle Celsius / Fahrenheit
- Beautiful glassmorphism UI with dynamic backgrounds

## ðŸ“ Project Structure

```
weather-app/
â”œâ”€â”€ public/
â””â”€â”€ src/
    â”œâ”€â”€ components/
    â”‚   â”œâ”€â”€ SearchBar.jsx
    â”‚   â”œâ”€â”€ WeatherCard.jsx
    â”‚   â”œâ”€â”€ Forecast.jsx
    â”‚   â”œâ”€â”€ WeatherDetails.jsx
    â”‚   â””â”€â”€ AnimatedIcon.jsx
    â”œâ”€â”€ hooks/
    â”‚   â””â”€â”€ useWeather.js
    â”œâ”€â”€ services/
    â”‚   â””â”€â”€ weatherApi.js
    â”œâ”€â”€ App.jsx
    â””â”€â”€ index.css
```

## âš™ï¸ Setup

```bash
git clone https://github.com/lekhasainaidu-lgtm/weather-app.git
cd weather-app
npm install
cp .env.example .env
# Add your OpenWeather API key
npm run dev
```

## ðŸŒ Environment Variables

```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
```

> Get a free API key at [openweathermap.org](https://openweathermap.org/api)

---
Made with â¤ï¸ by [Lekha](https://github.com/lekhasainaidu-lgtm)
