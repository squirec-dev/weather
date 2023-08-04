'use client'
import { ReactElement } from 'react';
import Search from '@/app/components/Search/index';
import { SearchHeroProps } from './types';

import styles from './search-hero.module.scss';

const SearchHero = ({
  isExpanded
}: SearchHeroProps): ReactElement => {
  return (
    <div className={isExpanded ? styles['hero--expanded'] :  styles['hero--collapsed']}>
      <Search />
    </div>
  )
}

export default SearchHero;
