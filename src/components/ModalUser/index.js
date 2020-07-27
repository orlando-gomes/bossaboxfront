import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, ButtonShow, Modalbox, ButtonSignOut } from './styles';

import chevDown from '~/assets/Chevron-Down-2px.svg';
import chevUp from '~/assets/Chevron-Up-2px.svg';
import iconUser from '~/assets/Icon-User-2px.svg';
import iconCancel from '~/assets/Icon-Cancel-2px.svg';

import { signOut } from '~/store/modules/auth/actions';

function ModalUser() {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  function handleModalVisibility() {
    setModalVisible(!modalVisible);
  }

  function handleSignOut() {
    dispatch(signOut());
    setModalVisible(false);
  }

  return (
    <Container>
      <ButtonShow onClick={handleModalVisibility}>
        {modalVisible ? (
          <img src={chevUp} alt="Show profile" />
        ) : (
          <img src={chevDown} alt="Show profile" />
        )}
      </ButtonShow>
      <Modalbox visible={modalVisible}>
        <Link to="/vuttruserprofile" onClick={handleModalVisibility}>
          <img className="user_profile" src={iconUser} alt="My profile" />
          My profile
        </Link>
        <ButtonSignOut onClick={handleSignOut}>
          <img className="signout" src={iconCancel} alt="Signout" />
          Sign Out
        </ButtonSignOut>
      </Modalbox>
    </Container>
  );
}

export default ModalUser;
