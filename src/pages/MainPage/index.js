import React from 'react';

import Card from '~/components/Card';
import Header from '~/components/Header';

import cardTest from '~/assets/Card-test.png';
import cardBackend from '~/assets/Card-backend.png';
import cardfrontend from '~/assets/Card-frontend.png';

import { Container, Greetings, DecisionArea, DecisionCards } from './styles';

function MainPage() {
  return (
    <Container>
      <Header />
      <Greetings>
        <h1>É um prazer recebê-lo</h1>
        <p>
          Esta é minha solução para o desafio full stack proposto pela Bossabox.
        </p>
      </Greetings>

      <DecisionArea>
        <h3>O que você gostaria de fazer primeiro?</h3>

        <DecisionCards>
          <Card to="/vuttrmainpage" image={cardTest}>
            Testar app real
          </Card>

          <Card to="/backend" image={cardBackend}>
            Saber sobre o backend
          </Card>

          <Card to="/frontend" image={cardfrontend}>
            Saber sobre o frontend
          </Card>
        </DecisionCards>
      </DecisionArea>
    </Container>
  );
}

export default MainPage;
