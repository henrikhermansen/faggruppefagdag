import React from 'react';

import Navigation from './Navigation';

const pageStyle = {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
};

const Page = ({ children }) => (
  <div style={ pageStyle }>
    <Navigation />
    { children }
  </div>
);

export default Page;
