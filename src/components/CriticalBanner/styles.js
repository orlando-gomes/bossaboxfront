import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => {
    switch (props.type) {
      case 'error':
        return css`
          background: #f95e5a;
        `;
      case 'success':
        return css`
          background: #12db89;
        `;

      default:
        return css`
          background: #fff;
        `;
    }
  }}
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
  margin: 16px 0 0 36px;
`;

export const BanButton = styled.button`
  background: #feefee;
  border: none;
  border-radius: 5px;
  padding: 6px;
  margin: 24px 0 0 36px;
  width: 100px;
  color: #f95e5a;
  ${(props) => {
    switch (props.banType) {
      case 'error':
        return css`
          color: #f95e5a;
        `;
      case 'success':
        return css`
          color: #12db89;
        `;

      default:
        return css`
          color: #fff;
        `;
    }
  }}

  transition: background 0.2s;

  &:hover {
    background: #fedddd;
  }
`;
