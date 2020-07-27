import styled from 'styled-components';

import laptop from '~/assets/Laptop.png';
import cardBackend from '~/assets/Card-backend.png';

export const Container = styled.div``;

export const Greetings = styled.div`
  background: url(${laptop}) no-repeat #777;
  background-size: cover;
  height: 395px;
  color: #fff;
  padding: 178px 50px 0 132px;
`;

export const DecisionArea = styled.div`
  padding: 90px 135px 0;
`;

export const DecisionCards = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    /*
    background: url(${cardBackend});
    width: 299px;
    height: 193px;
    color: #fcfcfd;
    text-align: center;
    line-height: 350px;
     */
  }
`;

export const Card = styled.div``;
