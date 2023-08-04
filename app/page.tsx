import { ReactElement, useRef } from 'react';
import SearchHero from './modules/SearchHero';
import ForecastDisplay from './components/ForecastDisplay';

const Home = (): ReactElement => {

  return (
    <section>
      <SearchHero isExpanded={false} />
      <div className='container'>
        <ForecastDisplay data={{
        "location": {
            "name": "London",
            "region": "City of London, Greater London",
            "country": "United Kingdom",
            "lat": 51.52,
            "lon": -0.11,
            "tz_id": "Europe/London",
            "localtime_epoch": 1691061203,
            "localtime": "2023-08-03 12:13"
        },
        "current": {
            "last_updated_epoch": 1691060400,
            "last_updated": "2023-08-03 12:00",
            "temp_c": 20.0,
            "temp_f": 68.0,
            "is_day": 1,
            "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
            },
            "wind_mph": 12.5,
            "wind_kph": 20.2,
            "wind_degree": 320,
            "wind_dir": "NW",
            "pressure_mb": 1005.0,
            "pressure_in": 29.68,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 56,
            "cloud": 50,
            "feelslike_c": 20.0,
            "feelslike_f": 68.0,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "uv": 5.0,
            "gust_mph": 10.1,
            "gust_kph": 16.2
        }
    }}/>
      </div>
    </section>
  )
}

export default Home;
