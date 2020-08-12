import React from 'react';

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaMusic,
} from 'react-icons/fa';

import {
  Container,
  LeftDiv,
  LeftTitle,
  LeftSubTitle,
  Social,
  RightDiv,
  Section,
  SectionBody,
  SectionField,
  RightTitle,
  HorizontalSeparator,
  MiniHorizontalSeparator,
} from './styles';
import Header from '~/components/Header';

import MyImage from '~/assets/MyImage.png';

function About() {
  return (
    <>
      <Header />
      <Container>
        <LeftDiv>
          <img src={MyImage} alt="MyImage" />
          <LeftTitle>Orlando Gomes</LeftTitle>
          <LeftSubTitle>Programador</LeftSubTitle>
          <Social>
            <a
              href="https://www.facebook.com/orlando.gomes.737"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color="#3A579B" size={28} />
            </a>

            <a
              href="https://github.com/orlando-gomes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="#303030" size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/orlando-gomes-da-costa-a65a5384/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#0074B0" size={28} />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5521987926790"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp color="#49C657" size={28} />
            </a>
          </Social>
        </LeftDiv>

        <RightDiv>
          <Section>
            <div className="sectionTitle">
              <span>Sobre mim</span>
            </div>

            <HorizontalSeparator />

            <SectionBody>
              <SectionField>
                Adoro programar. Minhas paixões atuais são Node.js, React e
                React Native. Sou graduado em Licenciatura de Matemática e tenho
                Mestrado profissional em Matemática pela UFRJ.
              </SectionField>

              <div className="verticalSeparator" />

              <SectionField>
                <div className="simpledata">
                  <span className="greenTitle">Idade</span>
                  <span>51</span>
                </div>

                <MiniHorizontalSeparator />

                <div className="simpledata">
                  <span className="greenTitle">Freelance</span>
                  <span>Disponível</span>
                </div>

                <MiniHorizontalSeparator />

                <div className="simpledata">
                  <span className="greenTitle email">Email</span>
                  <span>orlandosjm@yahoo.com.br</span>
                </div>

                <MiniHorizontalSeparator />
              </SectionField>
            </SectionBody>
          </Section>

          <Section>
            <div className="sectionTitle">
              <span>Minhas habilidades</span>
            </div>
            <HorizontalSeparator />
            <SectionBody>
              <SectionField className="flex">
                <div className="iconField">
                  <FaCode color="#fff" size={25} />
                </div>
                <RightTitle>Desenvolvedor web e mobile</RightTitle>
                <span>
                  Atualmente, sou freelancer na contrução de websites e, busco
                  trabalhar remoto para empresas nacionais ou estrangeiras.
                </span>
              </SectionField>

              <div className="verticalSeparator" />

              <SectionField className="flex">
                <div className="iconField">
                  <FaMusic color="#fff" size={20} />
                </div>
                <RightTitle>Músico amador</RightTitle>
                <span>
                  Já atuei como músico profissional e hoje produzo trilhas
                  sonoras por hobby.
                </span>
              </SectionField>
            </SectionBody>
          </Section>
        </RightDiv>
      </Container>
    </>
  );
}

export default About;
