import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Home from './components/Home';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

render(<App />, mainElement);
