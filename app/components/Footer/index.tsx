import { ReactElement } from 'react';
import DevicesIcon from '@mui/icons-material/Devices';

import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = (): ReactElement => {
  return (
    <footer>
      <div className='container'>
        <div className={styles['footer__author']}>
          <DevicesIcon className={styles['footer__author-icon']} />

          C. Squire

          {process.env.GITHUB_URL && (
            <>
              <span className={styles['footer__author-spacer']}>|</span>
              <Link href={process.env.GITHUB_URL}>Github</Link>
            </>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer;
