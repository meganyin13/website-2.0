import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Landing from '../src/Landing';
import About from '../src/About';

library.add(fab, faChevronDown, faEnvelope);

const App = (): React.ReactElement => (
  <div className="App">
    <Landing />
    <About />
  </div>
);

export default App;
