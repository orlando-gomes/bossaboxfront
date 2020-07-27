import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoAndName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 135px;

  a {
    color: #170c3a;
    font-weight: bold;
    font-size: 26px;
    margin-left: 68px;
  }
`;

export const NavbarProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 135px;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: #dedce1 2px solid;
  margin-right: 165px;
  box-sizing: content-box;
  height: 98px;

  div + div {
    margin-left: 28px;
  }
`;

export const Linkbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-items: left;
  height: 100px;

  &::before {
    content: '';
    width: 100%;
    height: 4px;
  }

  &::after {
    justify-self: left;
    align-self: left;
    content: '';
    width: ${(props) => (props.selected ? '100%' : '0')};
    height: 4px;
    background-color: #365df0;

    transition: width 0.3s ease-in-out 0s;
  }

  &:hover::after {
    justify-self: left;
    align-self: left;
    width: 100%;
  }

  button {
    color: ${(props) => (props.selected ? '#365df0' : '#8f8a9b')};
    height: 92px;
    display: inline-block;
    line-height: 92px;
    background: transparent;
    border: none;

    transition: color 0.2s linear;

    &:hover {
      color: #365df0;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .avatar {
    width: 35px;
    height: 35px;
  }

  a {
    text-decoration: none;
    color: #365df0;
  }
`;

export const User = styled.div`
  margin-right: 20px;
`;
