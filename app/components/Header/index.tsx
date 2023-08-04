import { ReactElement } from 'react';
import Image from 'next/image';

import styles from './header.module.scss';

const Header = (): ReactElement => {
  return (
    <header>
      <div className='container'>
        <h1 className={styles['logo']}>
          <Image
            className={styles['logo__icon']}
            src='/duck.svg'
            alt='logo'
            width='40'
            height='40'
          />
          
          Weather for ducks?
        </h1>
      </div>
    </header>
  )
}

export default Header;
