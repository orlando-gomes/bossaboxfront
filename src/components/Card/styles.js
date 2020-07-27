import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 299px;
  height: 193px;
  display: flex;

  a {
    background: url(${(props) => props.image});
    width: 299px;
    height: 193px;
    color: #fcfcfd;
    text-align: center;
    line-height: 350px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  }
`;

/*

*/
