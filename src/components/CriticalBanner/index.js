import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import exclusion from '~/assets/Exclusion.svg';
import success from '~/assets/Success.svg';

import { Container, BanTitle, BanMessage, BanButton } from './styles';

function CriticalBanner({ isVisible, type, message, onDismissing }) {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (type) {
      case 'error':
        setImage(exclusion);
        setTitle('An error han just happened!');
        break;
      case 'success':
        setImage(success);
        setTitle('Success!');
        break;

      default:
        break;
    }
  }, [isVisible, type]);

  return (
    <Container isVisible={isVisible} type={type}>
      <BanTitle>
        <img src={image} alt="ban" />
        {title}
      </BanTitle>
      <BanMessage>{message}</BanMessage>
      <BanButton type="button" onClick={onDismissing} banType={type}>
        Close
      </BanButton>
    </Container>
  );
}

export default CriticalBanner;

CriticalBanner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onDismissing: PropTypes.func.isRequired,
};
