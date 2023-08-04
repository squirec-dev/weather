'use client';

import { ReactElement, useState } from 'react';
import SearchHero from './modules/SearchHero';
import ForecastDisplay from './components/ForecastDisplay';
import { useSearchContext } from './hooks/useSearchContext';

const Home = (): ReactElement => {
  const [searchdata, setSearchdata] = useState<any>({});
  const hasError = searchdata?.error?.message;

  return (
    <section>
      <useSearchContext.Provider value={{ searchdata, setSearchdata }}>
        <SearchHero error={hasError} isExpanded={!searchdata?.location || hasError} />
        {searchdata?.location && (
          <div className='container'>
            <ForecastDisplay data={searchdata}/>
          </div>
        )}
      </useSearchContext.Provider>
    </section>
  )
}

export default Home;
