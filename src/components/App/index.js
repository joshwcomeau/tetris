import React, { PropTypes } from 'react';

import DevTools from '../DevTools';


const App = ({ children }) => {
  return (
    <div>
      {children}

      <DevTools />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};


export default App;
