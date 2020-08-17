import React from 'react';
import Header from '~/components/Header';

import { Container, Content } from './styles';
import backend from '~/assets/Backend.png';

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
              Github da aplicação{' '}
              <a
                href="https://github.com/orlando-gomes/bossaboxback"
                target="_blank"
                rel="noopener noreferrer"
              >
                nesse link.
              </a>
            </li>
            <li>Deploy em ambiente real.</li>
            <li>
              A API foi &quot;conteinerizada&quot;. Podemos baixar o container
              no Docker Hub{' '}
              <a
                href="https://hub.docker.com/r/orlandosjm/bossaboxbacklinux"
                target="_blank"
                rel="noopener noreferrer"
              >
                nesse link.
              </a>
            </li>
            <li>
              Documentação em Swagger inclusa na própria API. Podemos acessar a
              documentação da API hospedada{' '}
              <a
                href="https://www.orlstechbacks.com/bossaboxback/api-docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                nesse link.
              </a>
            </li>
            <li>
              Video contendo informações sobre as ferramentas usadas, sobre os
              testes, migrations, autenticação e pipelines.
            </li>
          </ul>
        </Content>

        <a
          href="https://youtu.be/G3dzGMpV5gE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={backend} alt="Video backend" />
        </a>
      </Container>
    </>
  );
}

export default Backend;
