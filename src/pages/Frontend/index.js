import React from 'react';
import Header from '~/components/Header';

import { Container, Content } from './styles';
import frontend from '~/assets/Frontend.png';

function Frontend() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h3>Frontend</h3>
          <p>
            Foi feita uma aplicação em ReactJS, conforme requisitos os listados:
          </p>
          <ul>
            <li>
              Github da aplicação{' '}
              <a
                href="https://github.com/orlando-gomes/bossaboxfront"
                target="_blank"
                rel="noopener noreferrer"
              >
                nesse link.
              </a>
            </li>
            <li>Deploy em ambiente real.</li>
            <li>
              Foram utilizados os wireframes fornecidos e foram feitos
              protótipos de alta qualidade, como podemos ver{' '}
              <a
                href="https://www.figma.com/file/pcOBRVIzbkgRFI4vUtxMga/Bossabox?node-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
              >
                nesse link.
              </a>
            </li>
            <li>
              Video contendo informações sobre as ferramentas usadas, sobre os
              testes, autenticação e pipelines.
            </li>
          </ul>
        </Content>

        <a
          href="https://youtu.be/PEvPA_IrZPk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={frontend} alt="Video frontend" />
        </a>
      </Container>
    </>
  );
}

export default Frontend;
