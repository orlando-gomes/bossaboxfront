import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './styles';

function Card({ children, image, ...rest }) {
  return (
    <Wrapper image={image}>
      <Link {...rest}>{children}</Link>
    </Wrapper>
  );
}

export default Card;
