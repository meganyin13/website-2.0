import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ChevronDown.module.css';

export default (): React.ReactElement => (
  <button
    type="button"
    className={styles.chevron}
  >
    <FontAwesomeIcon icon={faChevronDown} />
  </button>

);
