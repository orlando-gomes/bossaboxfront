import styled, { css } from 'styled-components';

export const UsefulArea = styled.div`
  width: 100%;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;

  transition: filter 2s linear;

  * {
    ${(props) =>
      props.isBlured &&
      css`
        filter: blur(3px);
      `}
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
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);
`;

export const AppName = styled.div`
  font-size: 58px;
  font-weight: bold;
`;

export const SubName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const SelectAndCheckbox = styled.div`
  display: flex;
  align-items: center;

  input {
    margin: 0 8px 0 32px;
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

export const ToolTitle = styled.a`
  font-size: 24px;
  color: #365df8;
  text-decoration: underline;
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
  color: ${(props) => (props.disabled ? '#8F9DD8' : '#365df8')};
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

export const ModalMask = styled.div`
  background: ${(props) =>
    props.becomingTransparent
      ? 'rgba(28, 04, 04, 0.3)'
      : 'rgba(28, 04, 04, 0.9)'};
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute; /*fixed */
  left: 0;
  top: 100px; /*0 */
  display: ${(props) => (props.isShowed ? 'flex' : 'none')};
  justify-content: center;
  overflow: auto;
  transition: background 1s linear;
`;

export const customSelectStyles = {
  container: (provided, state) => ({
    ...provided,
    borderRadius: '5px',
    background: state.isFocused ? '#EBEAED' : '#f9f9f9',
    border: state.isFocused ? '1px solid #DEDCE1' : '1px solid #EBEAED',

    '.react-select__placeholder': {
      color: '#b1adb9',
    },
  }),
  control: (provided, state) => ({
    ...provided,
    background: 'transparent',
    border: '0 !important',
    boxShadow: '0 !important',
    '&:hover': {
      border: state.isFocused ? 0 : 0,
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    width: '136px' /** '112px' */,
    background: 'transparent',
    borderRadius: '5px 0 0 5px',
    border: 'none',
    div: {
      color: '#170c3a',
    },
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    background: 'transparent',
    borderRadius: '0 5px 5px 0',
  }),
  indicatorsSeparator: (provided) => ({
    ...provided,
    background: '#edeaed',
  }),
  menuList: (provided) => ({
    ...provided,
    background: '#ffffff',
  }),
  option: (provided) => ({
    ...provided,
    background: '#ffffff',
    color: '#170c3a',
    '&:hover': {
      background: '#edeaed',
    },
  }),
};
