import React from 'react';

import {
  ModalMask,
  Container,
  Title,
  ButtonCancel,
  DivGender,
  Separator,
  ButtonAvatar,
} from './styles';

import man1 from '~/assets/avatar-man1.jpg';
import man2 from '~/assets/avatar-man2.jpg';
import man3 from '~/assets/avatar-man3.jpg';
import woman1 from '~/assets/avatar-woman1.jpg';
import woman2 from '~/assets/avatar-woman2.jpg';
import woman3 from '~/assets/avatar-woman3.jpg';

function ModalChangeAvatar({ visible, onVisibleChange, onChoosingAvatar }) {
  function dismiss() {
    onVisibleChange();
  }

  function setAvatar(avatarName) {
    onChoosingAvatar(avatarName);
    onVisibleChange();
  }

  return (
    <ModalMask visible={visible}>
      <Container>
        <Title>Choose your avatar</Title>
        <DivGender>
          <ButtonAvatar
            onClick={() => {
              setAvatar('man1');
            }}
          >
            <img src={man1} alt="man1" />
          </ButtonAvatar>
          <ButtonAvatar
            onClick={() => {
              setAvatar('man2');
            }}
          >
            <img src={man2} alt="man2" />
          </ButtonAvatar>
          <ButtonAvatar
            onClick={() => {
              setAvatar('man3');
            }}
          >
            <img src={man3} alt="man3" />
          </ButtonAvatar>
        </DivGender>

        <Separator />

        <DivGender>
          <ButtonAvatar
            onClick={() => {
              setAvatar('woman1');
            }}
          >
            <img src={woman1} alt="woman1" />
          </ButtonAvatar>
          <ButtonAvatar
            onClick={() => {
              setAvatar('woman2');
            }}
          >
            <img src={woman2} alt="woman2" />
          </ButtonAvatar>
          <ButtonAvatar
            onClick={() => {
              setAvatar('woman3');
            }}
          >
            <img src={woman3} alt="woman3" />
          </ButtonAvatar>
        </DivGender>
        <ButtonCancel type="button" onClick={dismiss}>
          Cancel
        </ButtonCancel>
      </Container>
    </ModalMask>
  );
}

export default ModalChangeAvatar;
