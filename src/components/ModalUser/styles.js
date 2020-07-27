import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 35px;
  position: relative;
`;

export const ButtonShow = styled.button`
  border: none;
  background: transparent;
`;

export const Modalbox = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  background: #fff;
  position: absolute;
  top: 50px;
  right: -60px;
  width: 175px;
  padding: 32px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  a {
    color: #365df0;
  }

  .user_profile {
    width: 14px;
    margin-right: 8px;
  }

  .signout {
    width: 18px;
    margin-right: 8px;
  }
`;

export const ButtonSignOut = styled.button`
  border: none;
  background: transparent;
  margin-top: 30px;
  text-align: left;
  color: #365df0;
`;
