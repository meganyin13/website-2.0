import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Landing from './Landing';
import About from './About';
import Fonts from './Fonts';

library.add(fab, faChevronDown, faEnvelope);

export default (): React.ReactElement => (
  <div className="App">
    <Fonts />
    <Landing />
    <About />
  </div>
);
