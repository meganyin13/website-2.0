import React from 'react';
import ChevronDown from './ChevronDown';
import headshot from '../img/headshot.jpg';
import styles from './index.module.css';

export default (): React.ReactElement => (
  <div className={styles.landing}>
    <img className={styles.headshot} src={headshot} alt="Megan Yin" />
    <div className={styles.text}>
      <h1>Megan Yin</h1>
      <h3>Computer Science @ Cornell University</h3>
      <h3>Student. Coder. Cornellian.</h3>
    </div>
    <ChevronDown />
  </div>
);
