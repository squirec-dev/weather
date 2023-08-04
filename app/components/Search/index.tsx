'use client';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import styles from './search.module.scss';

const Search = (): ReactElement => {
  const [searchterm, setSearchterm] = useState<string>('');

  const searchQuery = 'foo' //useDebounce(searchterm);

  useEffect(() => {
		if (searchQuery) {
    	console.log(searchQuery.toString()) // set value to context
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