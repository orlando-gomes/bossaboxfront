import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ModalMask = styled.div`
  background: rgba(28, 04, 04, 0.93);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 100px;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export const Container = styled.div`
  width: 370px;
  padding: 80px 32px;
  border-radius: 60px;
  border: 1px #000;
  background-image: linear-gradient(#e4f9ff, rgba(178, 164, 223, 0.5));
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);
  margin-top: 100px;
  margin-bottom: auto;

  @media (max-width: 760px) {
    width: 300px;
    padding: 32px 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 100%;
    color: #f95e5a;
    font-size: 18px;
    text-align: right;
  }
`;

export const Input = styled.input`
  margin-top: 32px;
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

export const Title = styled.div`
  font-size: 5.8rem;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 3.2rem;
  }
`;

export const ButtonSignUp = styled.button`
  margin-top: 32px;
  align-self: right;
  background: #365df0;
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 32px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0 16px;
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

export const SignupText = styled.div`
  font-size: 1.6rem;
  margin-top: 32px;

  a {
    margin-left: 6px;
    color: #365df8;
  }

  @media (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

export const Goback = styled.div`
  font-size: 1.6rem;

  a {
    margin-left: 6px;
    color: #365df8;
  }

  @media (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

export const Banner = styled.div`
  background: #f95e5a;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.6);
  width: 490px;
  padding: 32px;
  position: absolute;
  z-index: 10;
  top: 300px;
  left: calc(50% - 100px);
`;

export const BanTitle = styled.div`
  color: #fff;
  font-size: 26px;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    margin-right: 16px;
  }
`;

export const BanMessage = styled.div`
  color: #fff;
  font-size: 18px;
  margin-top: 16px;
`;

export const BanButton = styled.button`
  background: #feefee;
  border: none;
  border-radius: 5px;
  padding: 6px;
  margin-top: 24px;
  width: 100px;
  color: #f95e5a;

  transition: background 0.2s;

  &:hover {
    background: #fedddd;
  }
`;
