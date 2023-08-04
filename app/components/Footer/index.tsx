import { ReactElement } from "react";
import DevicesIcon from '@mui/icons-material/Devices';

import styles from './footer.module.scss';

const Footer = (): ReactElement => {
  return (
    <footer>
      <div className="container">
        <div className={styles.author}>
          <DevicesIcon className={styles.author__icon} />
          <span>C. Squire</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
