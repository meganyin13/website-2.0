import React from 'react';
import { animateScroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ChevronDown.module.css';

export default (): React.ReactElement => {
  const scrollDown = (): void => {
    animateScroll.scrollTo(document.documentElement.clientHeight, {
      delay: 100,
      duration: 400,
      smooth: true,
    });
  };
  return (
    <button type="button" className={styles.chevron} onClick={scrollDown}>
      <FontAwesomeIcon icon={faChevronDown} />
    </button>
  );
};
