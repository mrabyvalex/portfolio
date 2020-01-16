import React from 'react';
import { withRouter } from 'react-router-dom';

const Main = ({ location }) => (
  <h2>
Main
    {JSON.stringify(location)}
  </h2>
);

export default withRouter(Main);
