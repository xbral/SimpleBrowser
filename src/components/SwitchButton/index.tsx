import React from 'react';

import { Container } from './styles';

const SwitchButton: React.FC = () => {
  return <Container>
    <div className="switch-button">
      <input className="switch-button-checkbox" type="checkbox" />
      <label className="switch-button-label" htmlFor="">
        <span className="switch-button-label-span">Under</span>
      </label>
    </div>
  </Container>;
};

export default SwitchButton;
