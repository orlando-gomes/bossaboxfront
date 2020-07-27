import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
  width: 570px;
  padding: 48px 80px;
  border-radius: 4px;
  border: 1px #000;
  background: #ffffff;
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    color: #f95e5a;
    font-size: 18px;
    text-align: right;
  }
`;

export const Input = styled.input`
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

  &:focus {
    background: #ebeaed;
    border: 1px solid #dedce1;
    border-radius: 5px;
  }

  ${(props) =>
    props.error &&
    css`
      color: #f95e5a;
      background: #feefee;
      border: 1px solid #f95e5a;

      &::placeholder {
        color: rgba(249, 94, 90, 0.5);
      }
    `}
`;

export const TextArea = styled.textarea`
  margin-top: 8px;
  width: 100%;
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  color: #170c3a;
  font-size: 18px;
  padding: 0 8px;
  resize: none;

  &:focus {
    background: #ebeaed;
    border: 1px solid #dedce1;
    border-radius: 5px;
  }

  ${(props) =>
    props.error &&
    css`
      color: #f95e5a;
      background: #feefee;
      border: 1px solid #f95e5a;

      &::placeholder {
        color: rgba(249, 94, 90, 0.5);
      }
    `}
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  width: 100%;
  text-align: left;

  img {
    width: 15px;
    margin-right: 16px;
  }
`;

export const InputLabel = styled.div`
  margin-top: 32px;
  width: 100%;
  text-align: left;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
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

  img {
    width: 25px;
    animation: ${rotate} 1s linear infinite;
  }
`;

export const ButtonCancel = styled.button`
  width: 110px;
  margin-top: 32px;
  background: #feefee;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #f95e5a;
  border: none;
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
