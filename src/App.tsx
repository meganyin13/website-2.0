import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Landing from './Landing';
import Fonts from './Fonts';

library.add(faChevronDown);

export default (): React.ReactElement => (
  <div className="App">
    <Fonts />
    <Landing />
  </div>
);
