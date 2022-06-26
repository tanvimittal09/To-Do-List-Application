import React from 'react';

import './app-header.css';

const AppHeader = ({ todo, done }) => (
  <div className="app-header d-flex">
    <h1>Todo</h1>
    <h2>
      {todo}
      {' '}
      pending,
      {' '}
      {done}
      {' '}
      done
    </h2>
  </div>
);

export default AppHeader;
