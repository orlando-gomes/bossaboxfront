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
  width: 448px;
  padding: 32px 32px;
  border-radius: 4px;
  border: 1px #000;
  background: #ffffff;
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  input {
    margin-top: 8px;
    width: 100%;
    background: #f5f4f6;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    color: #170c3a;
    font-size: 18px;
    padding: 0 8px;

    &::placeholder {
      color: #b1adb9;
    }
  }

  input:focus {
    background: #ebeaed;
    border: 1px solid #dedce1;
    border-radius: 5px;
  }
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  width: 100%;
  text-align: left;
  color: #f95e5a;

  img {
    width: 15px;
    margin-right: 16px;
  }
`;

export const Warning = styled.div`
  font-size: 18px;
  margin-top: 32px;
  width: 100%;
  text-align: left;

  span {
    font-weight: bold;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

export const ButtonCancel = styled.button`
  width: 130px;
  margin: 32px 16px 0 0;
  background: #365df0;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 6px 7px rgba(0, 0, 0, 0.3);
  transition: background 0.2s;

  &:hover {
    background: #2f55cc;
  }

  &:active {
    background: #244aa8;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 380px) {
    margin: 32px 0 0;
    width: 100%;
  }
`;

export const ButtonRemove = styled.button`
  width: 130px;
  margin-top: 32px;
  background: #f95e5a;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 6px 7px rgba(150, 0, 0, 0.23);
  transition: background 0.2s;

  &:hover {
    background: #cc4c4c;
  }

  &:active {
    background: #a53f3f;
    box-shadow: 2px 4px 5px rgba(100, 0, 0, 0.4);
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;
