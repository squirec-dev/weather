import { ReactElement, createContext, useState } from 'react';
import { WeatherApiSuccessResponse, WeatherApiErrorResponse } from '../types/WeatherApi';

interface SearchContextType {
  searchdata: WeatherApiSuccessResponse | WeatherApiErrorResponse | {};
  setSearchdata: (state: WeatherApiSuccessResponse | WeatherApiErrorResponse | {}) => void;
}
  
export const useSearchContext = createContext<SearchContextType>({
  searchdata: {},
  setSearchdata: () => {},
});