import styled from 'styled-components';

export const ModalMask = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  background: rgba(23, 12, 58, 0.9);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed; /* */
  left: 0;
  top: 0; /*0 */
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 400px;
  padding: 24px 32px 48px;
  border-radius: 4px;
  border: 1px #000;
  background: #ffffff;
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 26px;
  text-align: center;
`;

export const DivGender = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #170c3a;
  margin-top: 18px;
`;

export const ButtonAvatar = styled.button`
  border: none;
  background: transparent;

  img {
    width: 75px;
    height: 75px;
    background: #777;
    border: 1px solid #bbb;
    border-radius: 50%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);

    transition: border 0.2s;

    &:hover {
      border: 1px solid #888;
    }

    &:active {
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    }
  }
`;

export const ButtonCancel = styled.button`
  width: 100%;
  margin-top: 32px;
  background: #feefee;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #f95e5a;
  border: 1px solid #fee0e0;
  border-radius: 5px;
  box-shadow: 4px 6px 7px rgba(150, 0, 0, 0.23);
  transition: background 0.2s;

  &:hover {
    background: #fcd7d6;
  }

  &:active {
    background: #fcc6c5;
    box-shadow: 2px 4px 5px rgba(100, 0, 0, 0.4);
  }
`;
