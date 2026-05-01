import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5';

const weatherIcons = { Clear:'â˜€ï¸', Clouds:'â˜ï¸', Rain:'ðŸŒ§ï¸', Drizzle:'ðŸŒ¦ï¸', Thunderstorm:'â›ˆï¸', Snow:'â„ï¸', Mist:'ðŸŒ«ï¸', Haze:'ðŸŒ«ï¸' };

function WeatherCard({ data, unit }) {
  const temp = unit === 'C' ? Math.round(data.main.temp) : Math.round(data.main.temp * 9/5 + 32);
  const icon = weatherIcons[data.weather[0].main] || 'ðŸŒ¤ï¸';
  return (
    <div style={{ textAlign:'center', padding:'40px 0' }}>
      <div style={{ fontSize:'5rem' }}>{icon}</div>
      <div style={{ fontSize:'4rem', fontWeight:800, margin:'8px 0' }}>{temp}Â°{unit}</div>
      <div style={{ fontSize:'1.3rem', color:'#94a3b8', marginBottom:8 }}>{data.weather[0].description}</div>
      <div style={{ fontSize:'1.5rem', fontWeight:700 }}>{data.name}, {data.sys.country}</div>
      <div style={{ display:'flex', justifyContent:'center', gap:32, marginTop:24 }}>
        {[
          { label:'Humidity',   value:`${data.main.humidity}%` },
          { label:'Wind',       value:`${Math.round(data.wind.speed)} m/s` },
          { label:'Feels like', value:`${Math.round(data.main.feels_like)}Â°` },
        ].map(d => (
          <div key={d.label} style={{ textAlign:'center' }}>
            <div style={{ fontWeight:700, fontSize:'1.1rem' }}>{d.value}</div>
            <div style={{ color:'#94a3b8', fontSize:'0.8rem' }}>{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [city, setCity]     = useState('London');
  const [query, setQuery]   = useState('London');
  const [weather, setWeather] = useState(null);
  const [unit, setUnit]     = useState('C');
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState('');

  useEffect(() => {
    setLoading(true); setError('');
    const units = 'metric';
    fetch(`${API_URL}/weather?q=${query}&units=${units}&appid=${API_KEY}`)
      .then(r => { if (!r.ok) throw new Error('City not found'); return r.json(); })
      .then(data => { setWeather(data); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, [query]);

  return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,#0a0a0f 0%,#1a0a2e 50%,#0a1628 100%)', color:'#f1f5f9', fontFamily:'Inter,sans-serif', display:'flex', flexDirection:'column', alignItems:'center', padding:40 }}>
      <h1 style={{ fontSize:'2rem', fontWeight:800, marginBottom:32, background:'linear-gradient(135deg,#8b5cf6,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
        â›… WeatherNow
      </h1>
      <div style={{ display:'flex', gap:12, marginBottom:32, width:'100%', maxWidth:500 }}>
        <input value={city} onChange={e => setCity(e.target.value)} onKeyDown={e => e.key==='Enter' && setQuery(city)}
          placeholder="Search city..."
          style={{ flex:1, padding:'12px 16px', borderRadius:12, border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.05)', color:'#f1f5f9', fontSize:'0.95rem', outline:'none' }} />
        <button onClick={() => setQuery(city)} style={{ padding:'12px 20px', borderRadius:12, background:'linear-gradient(135deg,#8b5cf6,#06b6d4)', border:'none', color:'#fff', fontWeight:600, cursor:'pointer' }}>
          Search
        </button>
        <button onClick={() => setUnit(u => u==='C'?'F':'C')}
          style={{ padding:'12px 16px', borderRadius:12, border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.05)', color:'#f1f5f9', cursor:'pointer', fontWeight:600 }}>
          Â°{unit==='C'?'F':'C'}
        </button>
      </div>
      <div style={{ width:'100%', maxWidth:500, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:20, padding:'24px 32px', backdropFilter:'blur(16px)' }}>
        {loading && <p style={{ textAlign:'center', color:'#94a3b8' }}>Loading...</p>}
        {error   && <p style={{ textAlign:'center', color:'#ef4444' }}>{error}</p>}
        {weather && !loading && <WeatherCard data={weather} unit={unit} />}
      </div>
    </div>
  );
}
