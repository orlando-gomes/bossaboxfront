import React from 'react';
import Header from '~/components/Header';

import { Container, Content } from './styles';
import Video from '~/assets/video.png';

function Backend() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h3>Backend</h3>
          <p>Fizemos uma API conforme requisitos os listados:</p>
          <ul>
            <li>
              Github da aplicação <a href="#">nesse link.</a>
            </li>
            <li>Deploy em ambiente real.</li>
            <li>
              A API foi &quot;conteinerizada&quot;. Podemos baixar o container
              no Docker Hub <a href="#">nesse link.</a>
            </li>
            <li>
              Documentação em Swagger inclusa na pr'pria API. Podemos acessar a
              documentação da API hospedada <a href="#">nesse link.</a>
            </li>
            <li>
              Video contendo informações sobre as ferramentas usadas, sobre os
              testes, migrations, autenticação e pipelines.
            </li>
          </ul>
        </Content>

        <a href="#">
          <img src={Video} alt="Video backend" />
        </a>
      </Container>
    </>
  );
}

export default Backend;
