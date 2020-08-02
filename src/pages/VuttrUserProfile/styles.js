import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const UsefulArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 570px;
  width: 100%;
  margin: 0 50px;
  padding: 48px 80px;
  background: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 48px;

  @media (max-width: 600px) {
    padding: 48px 30px;
  }

  .avatar {
    width: 75px;
    height: 75px;
    margin-top: 32px;
    border-radius: 50%;
  }
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: bold;

  img {
    width: 26px;
    margin-right: 16px;
  }
`;

export const ButtonAvatar = styled.button`
  background: transparent;
  border: none;
`;

export const Form = styled.div`
  margin-top: 32px;
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
  margin-top: 24px;
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

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #170c3a;
  margin-top: 24px;
`;

export const ButtonUpdate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 16px 0 0;
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
