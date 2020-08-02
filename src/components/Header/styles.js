import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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

  a + a {
    color: #170c3a;
    font-weight: bold;
    font-size: 2.6rem;
    margin-left: 68px;
  }

  @media (max-width: 760px) {
    margin-left: 50px;

    a + a {
      font-size: 2rem;
      margin-left: 20px;
    }
  }

  @media (max-width: 550px) {
    a + a {
      display: none;
    }
  }
`;

export const NavbarProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 135px;

  .navbarhidden {
    background: transparent;
    display: none;
    border: none;
    margin-left: 32px;
  }

  @media (max-width: 1440px) {
    margin-right: 80px;
  }

  @media (max-width: 1140px) {
    flex-direction: row-reverse;

    .navbarhidden {
      display: block;
    }
  }

  @media (max-width: 760px) {
    margin-right: 50px;
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: #dedce1 2px solid;
  margin-right: 165px;
  box-sizing: content-box;
  height: 98px;

  &.open {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.7);
    padding: 10px 0;
    position: absolute;
    top: 70px;
    right: -60px;
    width: 140px;
    height: auto;
    z-index: 15;

    div {
      margin-left: 0;
    }
  }

  div + div {
    margin-left: 28px;
  }

  @media (max-width: 1440px) {
    margin-right: 80px;
  }

  @media (max-width: 1140px) {
    display: none;
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

  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: 50px;
    width: 120px;

    &::before {
      content: '';
      display: none;
    }

    &::after {
      content: '';
      display: none;
    }

    button {
      margin: 0;
      padding: 0;
      height: 45px;
      display: block;
      line-height: 45px;
      border-radius: 6px;
      width: 100%;

      &:hover {
        background: #e1e7fd;
      }
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
