import styled from 'styled-components';

import laptop from '~/assets/Laptop.png';

export const Container = styled.div``;

export const Greetings = styled.div`
  background: url(${laptop}) no-repeat #777;
  background-size: cover;
  height: 395px;
  color: #fff;
  padding: 178px 50px 0 132px;

  @media (max-width: 1140px) {
    height: 300px;
    padding: 120px 20px 0 132px;

    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 760px) {
    padding: 120px 20px 0 50px;
  }
`;

export const DecisionArea = styled.div`
  padding: 90px 135px 0;

  @media (max-width: 1230px) {
    padding: 50px 80px 0;
  }

  @media (max-width: 1230px) {
    text-align: center;
  }
`;

export const DecisionCards = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1230px) {
    flex-direction: column;

    div + div {
      margin-top: 20px;
    }

    div:last-child {
      margin-bottom: 20px;
    }
  }
`;

export const Card = styled.div``;
