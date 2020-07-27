import styled from 'styled-components';

import backend from '~/assets/Useful-area-backend.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: url(${backend}) no-repeat;
  background-size: cover;
  height: 100%;

  a {
    margin: 270px 136px 0 0;
    width: 370px;
    height: 210px;
  }

  img {
    width: 370px;
    height: 210px;
  }
`;

export const Content = styled.div`
  margin: 190px 0 0 233px;
  width: 600px;

  p {
    margin: 38px 0 16px;
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }
`;
