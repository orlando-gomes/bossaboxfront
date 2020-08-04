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
    color: #365df0;
  }

  img {
    width: 370px;
    height: 210px;
  }

  @media (max-width: 1350px) {
    a {
      margin: 200px 100px 0 0;
      width: 370px;
      height: 210px;
    }
  }

  @media (max-width: 1230px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;

    a {
      margin: 40px 0 20px 0;
      width: 370px;
      height: 210px;
    }
  }
`;

export const Content = styled.div`
  margin: 190px 0 0 233px;
  width: 600px;

  @media (max-width: 1350px) {
    margin: 90px 0 0 135px;
  }

  @media (max-width: 1230px) {
    margin: 60px 0 0 0;
  }

  @media (max-width: 750px) {
    width: auto;
    max-width: 600px;
    margin: 60px 50px 0;
  }

  p {
    margin: 38px 0 16px;
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }
`;
