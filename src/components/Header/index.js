import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MdMoreVert } from 'react-icons/md';

import {
  Container,
  LogoAndName,
  NavbarProfile,
  NavBar,
  Linkbox,
  Profile,
  User,
} from './styles';

import logo from '~/assets/Logo-Bossa.svg';
import ModalUser from '~/components/ModalUser';
import unknown from '~/assets/avatar-unknown.png';
import man1 from '~/assets/avatar-man1.jpg';
import man2 from '~/assets/avatar-man2.jpg';
import man3 from '~/assets/avatar-man3.jpg';
import woman1 from '~/assets/avatar-woman1.jpg';
import woman2 from '~/assets/avatar-woman2.jpg';
import woman3 from '~/assets/avatar-woman3.jpg';

function Header() {
  const history = useHistory();
  const pathName = history.location.pathname;
  const { userProfile } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState(unknown);

  function handleLocation(path) {
    history.push(path);
  }

  useEffect(() => {
    switch (userProfile.avatar_name) {
      case 'man1':
        setAvatar(man1);
        break;
      case 'man2':
        setAvatar(man2);
        break;
      case 'man3':
        setAvatar(man3);
        break;
      case 'woman1':
        setAvatar(woman1);
        break;
      case 'woman2':
        setAvatar(woman2);
        break;
      case 'woman3':
        setAvatar(woman3);
        break;

      default:
        setAvatar(unknown);
        break;
    }
  }, [userProfile]);

  function showOrHideMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }

  return (
    <Container>
      <LogoAndName>
        <Link to="/">
          <img src={logo} alt="Desafio Bossabox" />
        </Link>

        <Link to="/">Desafio Full Stack</Link>
      </LogoAndName>

      <NavbarProfile>
        <button className="navbarhidden" type="button" onClick={showOrHideMenu}>
          <MdMoreVert color="#8F8A9B" size={28} />
        </button>
        <NavBar className="menu">
          <Linkbox selected={pathName === '/backend'}>
            <button
              type="button"
              onClick={() => {
                handleLocation('/backend');
              }}
            >
              Backend
            </button>
          </Linkbox>

          <Linkbox selected={pathName === '/frontend'}>
            <button
              type="button"
              onClick={() => {
                handleLocation('/frontend');
              }}
            >
              Frontend
            </button>
          </Linkbox>

          <Linkbox selected={pathName.indexOf('vuttr') !== -1}>
            <button
              type="button"
              onClick={() => {
                handleLocation('/vuttrmainpage');
              }}
            >
              VUTTR
            </button>
          </Linkbox>

          <Linkbox selected={pathName === '/about'}>
            <button
              type="button"
              onClick={() => {
                handleLocation('/about');
              }}
            >
              O autor
            </button>
          </Linkbox>
        </NavBar>

        {userProfile.name ? (
          <Profile>
            <User>{userProfile.name.split(' ')[0]}</User>
            <ModalUser />
            <img className="avatar" src={avatar} alt="My avatar" />
          </Profile>
        ) : (
          <Profile>
            <Link to="/vuttrmainpage">Entrar no VUTTR</Link>
          </Profile>
        )}
      </NavbarProfile>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  location: null,
};
