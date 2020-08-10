import styled, { css } from 'styled-components';

export const UsefulArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /*padding-bottom: 100px; */

  * {
    filter: blur(3px);
  }
`;

export const Container = styled.div`
  width: 768px;
  min-height: 736px;
  height: auto;
  margin-top: 32px;
  padding: 16px 32px 32px;
  border-radius: 60px;
  border: 1px #000;
  background-image: linear-gradient(#e4f9ff, rgba(178, 164, 223, 0.5));
  /*box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);*/

  @media (max-width: 900px) {
    max-width: 768px;
    width: auto;
    margin: 32px 50px 0;
  }

  @media (max-width: 660px) {
    border-radius: 40px;
  }
`;

export const AppName = styled.div`
  font-size: 58px;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 30px;
  }

  @media (max-width: 660px) {
    font-size: 26px;
  }
`;

export const SubName = styled.div`
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 660px) {
    font-size: 24px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const SelectAndCheckbox = styled.div`
  display: flex;
  align-items: center;

  .react-select-container {
  }

  .react-select__control {
    background: transparent;
  }

  .react-select__value-container {
    width: 112px;
    background: #f5f4f6;
    border-radius: 5px 0 0 5px;
    border: 1px solid #edeaed;

    div {
      color: #170c3a;
    }
  }

  .react-select__indicators {
    background: #365df0;
    border-radius: 0 5px 5px 0;
  }

  .react-select__indicator-separator {
    background: #365df0;
  }

  input {
    margin: 0 8px 0 32px;
  }

  @media (max-width: 660px) {
    width: 100%;

    input {
      margin: 0 8px 0 16px;
    }
  }
`;

export const ButtonAdd = styled.button`
  align-self: right;
  background: #365df0;
  width: 96px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0 16px;
  box-shadow: 4px 6px 7px rgba(0, 0, 0, 0.3);
  transition: background 0.2s;

  @media (max-width: 660px) {
    margin: 10px 0;
    width: 100%;
    justify-content: center;
  }

  &:hover {
    background: #2f55cc;
  }

  &:active {
    background: #244aa8;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 14px;
  }
`;

export const ButtonAddText = styled.div`
  font-size: 20px;
  color: #fff;

  @media (max-width: 660px) {
    margin-left: 10px;
  }
`;

export const ListTool = styled.ul`
  margin-top: 16px;
`;

export const CardTool = styled.li`
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  box-shadow: 4px 6px 7px rgba(0, 0, 0, 0.3);

  & + li {
    margin-top: 16px;
  }
`;

export const TitleAndButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToolTitle = styled.div`
  font-size: 24px;
  color: #365df8;
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;

  img {
    margin-right: 8px;
    width: 10px;
  }
`;

export const ButtonRemoveText = styled.div`
  color: #f95e5a;
  font-size: 16px;
`;

export const ToolDescription = styled.div`
  margin: 8px 0;
  color: #878a9b;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  margin-right: 8px;
  background: ${(props) => props.highlighted && '#FFDDA1'};
  border-radius: ${(props) => props.highlighted && '5px'};

  color: #878a9b;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  font-size: 18px;

  img {
    width: 10px;
  }
`;

export const PreviousNext = styled.button`
  color: ${(props) => (props.disable ? '#8F9DD8' : '#365df8')};
  margin: 0 8px;
  background: transparent;
  border: none;
`;

export const Page = styled.button`
  margin: 0;
  border: none;
  background: transparent;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 18px;
  color: #365df8;

  ${(props) =>
    props.active &&
    css`
      background: #ebeaed;
      color: #170c3a;
    `}
`;
