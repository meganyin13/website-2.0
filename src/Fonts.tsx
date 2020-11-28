import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

const Fonts = (): React.ReactElement => (
  <GoogleFontLoader
    fonts={[
      {
        font: 'Nunito',
        weights: [400, 700],
      },
      {
        font: 'Kalam',
        weights: [400],
      },
    ]}
  />
);

export default Fonts;
