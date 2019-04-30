import React from 'react';

import './AppHeader.scss';

const AppHeader = ({ children }) => {
  return (
    <section className="app__header">
      <span className="app__header__splash">{children}</span>
    </section>
  );
};

export default AppHeader;
