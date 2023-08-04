import { ReactElement } from 'react';
import AirIcon from '@mui/icons-material/Air';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import { ForecastDisplayProps } from './types';

import styles from './forecast-display.module.scss';

const ForecastDisplay = ({data}: ForecastDisplayProps): ReactElement => {
  const {location: {name, country}, current} = data;
  
  return (
    <>
      <h2 className={styles['forecast-display__title']}>
        Your weather for {name}, {country}
        
        <small className={styles['forecast-display__last-updated']}>
          Last updated {new Date(current.last_updated).toLocaleDateString()}
        </small>
      </h2>

      <ul className={styles['forecast-display__list']}>
        <li>
          <DeviceThermostatIcon className={styles['forecast-display__icon']} /> 
          Temperature (F) {current.temp_f} 
          <small>feels like {current.feelslike_f}</small>
        </li>
        <li>
          <DeviceThermostatIcon className={styles['forecast-display__icon']} /> Temperature (C) {current.temp_c} 
          <small>feels like {current.feelslike_c}</small>
        </li>
        <li>
          <OpacityIcon className={styles['forecast-display__icon']} /> Humidity (C) {current.humidity}
        </li>
        <li>
          <AirIcon className={styles['forecast-display__icon']} /> Wind (MPH) {current.wind_mph}
        </li>
        <li>
          <AirIcon className={styles['forecast-display__icon']} /> Wind (KPH) {current.wind_kph}
        </li>
      </ul>
    </>
  )
}

export default ForecastDisplay;
