import React from 'react';
import ChevronDown from './ChevronDown';
import styles from './index.module.css';
import headshot from './headshot.jpg';

const Landing = (): React.ReactElement => (
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

export default Landing;
