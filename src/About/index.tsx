import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import headshot2 from '../img/headshot2square.jpg';
import styles from './index.module.css';

export default (): React.ReactElement => (
  <div className={styles.About}>
    <div className={styles.Picture}>
      <img src={headshot2} alt="Megan Yin" />
    </div>
    <div className={styles.Text}>
      <h1 className={styles.Greeting}>Hey! I&#39;m Megan.</h1>
      <p>I&#39;m a CS student at Cornell University.</p>
      <p>
        I love creating user interfaces, analyzing data,
        and just exploring the bleeding edge of web technologies!
      </p>
      <p>Have a cool idea or just wanna chat? Feel free to connect with me!</p>
      <div className={styles.Socials}>
        <a aria-label="facebook" href="https://www.facebook.com/meganyin13"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        <a aria-label="instagram" href="https://www.instagram.com/meganyin13/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a aria-label="email" href="mailto:my474@cornell.edu"><FontAwesomeIcon icon="envelope" /></a>
        <a aria-label="github" href="https://github.com/meganyin13"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a aria-label="linkedin" href="https://www.linkedin.com/in/meganyin13/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      </div>
    </div>
  </div>
);
