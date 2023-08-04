'use client';

import { ChangeEvent, ReactElement, useContext, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '@/app/hooks/useDebounce';
import { useSearchContext } from '@/app/hooks/useSearchContext';
import getForecast from '@/app/utils/getForecast';

import styles from './search.module.scss';

const Search = (): ReactElement => {
  const [searchterm, setSearchterm] = useState<string>('');

  const searchQuery = useDebounce(searchterm);

  const { setSearchdata } = useContext(useSearchContext);

  const fetchData = async (q: string): Promise<void> => {
    const forcast = await getForecast(q);
    
    if (forcast) {
      setSearchdata(forcast);
    }
  }

  useEffect(() => {
		if (searchQuery) {
    	fetchData(searchQuery);
		} else {
      setSearchdata({})
    }
  }, [searchQuery])

  return (
    <div className={styles['search__wrapper']}>
      <SearchIcon />
      
      <input
        aria-label='Search'
        className={styles['search__input']}
        defaultValue={searchterm}
        id='search'
        name='search'
        placeholder='Search...'
        type='search'
        onChange={(event: ChangeEvent<HTMLInputElement>) => 
          setSearchterm(event.target.value)
        }
      />
    </div>
  );
}

export default Search;