import styled from 'styled-components';
import leftDivImage from '~/assets/leftDivImage.png';
import oval from '~/assets/Oval.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 36px 30px;

  @media (max-width: 1060px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${leftDivImage});
  background-color: #fff8ec;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  width: 100%;
  max-width: 370px;
  height: 650px;
  border-radius: 5px;
  box-shadow: 4px 6px 20px #000;
  z-index: 2;

  img {
    margin-top: 230px;
  }

  @media (max-width: 400px) {
    height: 600px;

    img {
      margin-top: 180px;
    }
  }

  @media (max-width: 340px) {
    height: 570px;

    img {
      margin-top: 150px;
    }
  }
`;

export const LeftTitle = styled.div`
  font-size: 34px;
  margin: 30px 0 0;
`;

export const LeftSubTitle = styled.div`
  margin-top: 16px;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  margin-top: 48px;

  a {
    text-decoration: none;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff8ec;
  border: 1px solid #d89c3a30;
  width: 580px;
  height: 580px;
  border-radius: 0 5px 5px 0;
  box-shadow: 4px 6px 5px rgba(0, 0, 0, 0.5);
  margin-top: 34px;
  padding: 0 10px 0 26px;
  font-size: 1.8rem;

  @media (max-width: 1060px) {
    box-shadow: 4px 6px 20px #000;
  }

  @media (max-width: 630px) {
    width: 100%;
    max-width: 370px;
    height: auto;
    padding: 0 10px 10px 26px;
  }
`;

export const Section = styled.div`
  .sectionTitle {
    margin-top: 10px;
    height: 60px;
    width: 100%;
    background-image: url(${oval});
    background-position: left center;
    background-repeat: no-repeat;
    padding-left: 16px;
    line-height: 60px;
    text-decoration: bold;
    font-size: 2.2rem;
  }
`;

export const SectionBody = styled.div`
  display: flex;

  @media (max-width: 630px) {
    flex-direction: column;
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .verticalSeparator {
    background: linear-gradient(to bottom, #170c3a, #170c3a00);
    width: 1px;

    @media (max-width: 630px) {
      display: none;
    }
  }
`;

export const SectionField = styled.div`
  width: 50%;
  padding: 12px 10px;

  .simpledata {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .greenTitle {
    background: #d89c3a;
    border-radius: 3px;
    padding: 0 4px;
    color: #fff;
  }

  .iconField {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: #d89c3a;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 630px) {
    width: 100%;
  }

  @media (max-width: 370px) {
    .simpledata {
      font-size: 1.6rem;
    }
  }
`;

export const RightTitle = styled.div`
  text-decoration: bold;
  font-size: 2.2rem;
`;

export const HorizontalSeparator = styled.div`
  background: linear-gradient(to right, #170c3a, #170c3a00);
  height: 1px;
  width: 100%;
`;

export const MiniHorizontalSeparator = styled.div`
  background: linear-gradient(to right, #170c3a00, #170c3a, #170c3a00);
  height: 1px;
  width: 100%;
  margin-bottom: 8px;
`;
