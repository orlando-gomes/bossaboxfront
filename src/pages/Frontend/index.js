import React from 'react';
import Header from '~/components/Header';

import { Container, Content } from './styles';
import Video from '~/assets/video.png';

function Frontend() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h3>Frontend</h3>
          <p>
            Fizemos uma aplicação em ReactJS, conforme requisitos os listados:
          </p>
          <ul>
            <li>
              Github da aplicação <a href="#">nesse link.</a>
            </li>
            <li>Deploy em ambiente real.</li>
            <li>
              Utilizamos os wireframes fornecidos e fizemos protótipos de alta
              qualidade, como podemos ver <a href="#">nesse link.</a>
            </li>
            <li>
              Video contendo informações sobre as ferramentas usadas, sobre os
              testes, autenticação e pipelines.
            </li>
          </ul>
        </Content>

        <a href="#">
          <img src={Video} alt="Video backend" />
        </a>
      </Container>
      <Header />
    </>
  );
}

export default Frontend;
