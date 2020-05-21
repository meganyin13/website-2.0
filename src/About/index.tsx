import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Confetti from 'react-dom-confetti';
import headshot2 from '../img/headshot2square.jpg';
import styles from './index.module.css';

export default (): React.ReactElement => {
  const [clickConfetti, setClickConfetti] = useState(false);

  const confettiConfig = {
    angle: 0,
    spread: 360,
    startVelocity: 18,
    elementCount: 200,
    dragFriction: 0.1,
    duration: 3000,
    delay: 0,
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const showConfetti = (): void => setClickConfetti(true);

  return (
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
        <p>
          Also,
          <button
            type="button"
            onClick={showConfetti}
            className={`${styles.ConfettiButton} ${clickConfetti && styles.Clicked}`}
          >
            click
          </button>
          for some confetti! &nbsp;
          <span
            role="img"
            aria-label="confetti emoji"
          >
            🎉
          </span>
        </p>
        <div style={{
          position: 'relative',
          left: '20%',
          top: '-10%',
        }}
        >
          <Confetti active={clickConfetti} config={confettiConfig} />
        </div>
        {clickConfetti
          && (
            <p>
              Want some more confetti?
              Check out&nbsp;
              <a href="https://samwise.today/">Samwise</a>
              !
            </p>
          )}
      </div>
    </div>
  );
};
