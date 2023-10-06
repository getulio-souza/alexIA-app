import React from "react";

import { Link } from "react-router-dom";

import {
  HomeHeader,
  HomeHeaderButton,
  PageUnderline,
  HomeHeaderText,
  HomeHeaderTitle,
  HomeHeaderDescription,
  HomeHeaderImg,
  HomeBenefits,
  SingleBenefit,
  SingleBenefitText,
  SingleBenefitTitle,
  SingleBenefitDescription,
  SingleBenefitImg,
  HomeQuestions,
  HomeQuestionsTitle,
  HomeQuestionsContainer,
  SingleHomeQuestion,
  SingleHomeQuestionTitle,
  SingleHomeQuestionText,
  HomeNewsletter,
  HomeNewsletterTitle,
  HomeNewsletterInfo,
  HomeNewsletterEmailInput,
  HomeNewsletterSubscribeBtn,
  HomeNewsletterSocialMedia,
  InstagramIcon,
  FacebookIcon,
} from "./home.styles";

import alexia from "../../assets/ia-second-example.jpg";
import pacientAndDoctor from "../../assets/chat-IA.jpg";
import IAiamge from "../../assets/IA-1160x680.jpg";
import IAiamge1 from "../../assets/IA-e-medicina.jpg";
import faceIcon from "../../assets/facebook.png";
import InstaIcon from "../../assets/instagram.png";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function home() {
  return (
    <>
      <Navbar/>
      <HomeHeader>
        <HomeHeaderText>
          <HomeHeaderTitle>
            AlexIA, reinventando a triagem de pacientes
          </HomeHeaderTitle>
          <HomeHeaderDescription>
            Conheça a AlexIA, uma revolucionária plataforma de atendimento
            médico virtual que transforma a maneira como você lida com sua
            saúde. Com a nossa inteligência artificial, AlexIA irá conversar
            diretamente com seus clientes, usuário de planos de saúde, e fazer a
            triagem de acordo com base nas informações fornecidas no chat.
          </HomeHeaderDescription>
          <Link to="/chatBot-demo">
          <HomeHeaderButton>Teste a demo</HomeHeaderButton>
          </Link>
        </HomeHeaderText>
        <HomeHeaderImg src={alexia}></HomeHeaderImg>
      </HomeHeader>
      <PageUnderline></PageUnderline>
      <HomeBenefits>
        <SingleBenefit>
          <SingleBenefitText>
            <SingleBenefitTitle>
              Chat Privado,Dinâmico e Eficaz
            </SingleBenefitTitle>
            <SingleBenefitDescription>
              O paciente interage diretamente com a AlexIA por meio de um chat
              privado para realizar sua triagem com rapidez e segurança.
            </SingleBenefitDescription>
          </SingleBenefitText>
          <SingleBenefitImg src={pacientAndDoctor}></SingleBenefitImg>
        </SingleBenefit>
        <SingleBenefit>
          <SingleBenefitText>
            <SingleBenefitTitle>
              Padrões e Sintomas Identificados pelo FHIR
            </SingleBenefitTitle>
            <SingleBenefitDescription>
              AlexIA usa o padrão FHIR para encontrar padrões e correlações
              entre sintomas, indicando possíveis causas com maior
              assertividade.
            </SingleBenefitDescription>
          </SingleBenefitText>
          <SingleBenefitImg src={IAiamge}></SingleBenefitImg>
        </SingleBenefit>
        <SingleBenefit>
          <SingleBenefitText>
            <SingleBenefitTitle>Triagem Inovadora</SingleBenefitTitle>
            <SingleBenefitDescription>
              AlexIA revoluciona a triagem de pacientes com uso da inteligência
              artificial, agilizando o processo e garantindo diagnósticos mais
              precisos e eficientes.
            </SingleBenefitDescription>
          </SingleBenefitText>
          <SingleBenefitImg src={IAiamge1}></SingleBenefitImg>
        </SingleBenefit>
      </HomeBenefits>
      <PageUnderline></PageUnderline>
      <HomeQuestions>
        <HomeQuestionsTitle>Perguntas Frequentes</HomeQuestionsTitle>
        <HomeQuestionsContainer>
          <SingleHomeQuestion>
            <SingleHomeQuestionTitle>
              A AlexIA é segura?
            </SingleHomeQuestionTitle>
            <SingleHomeQuestionText>
              Sim! A segurança dos seus dados é nossa prioridade. Utilizamos
              criptografia e práticas avançadas de segurança para proteger suas
              informações.
            </SingleHomeQuestionText>
          </SingleHomeQuestion>
          <SingleHomeQuestion>
            <SingleHomeQuestionTitle>
              A AlexIA substitui médicos?
            </SingleHomeQuestionTitle>
            <SingleHomeQuestionText>
              A AlexIA não pretende substituir médicos, mas sim complementar o
              atendimento tradicional, oferecendo diagnósticos mais rápidos e
              agilizando seus cuidados médicos.
            </SingleHomeQuestionText>
          </SingleHomeQuestion>
          <SingleHomeQuestion>
            <SingleHomeQuestionTitle>
              Como a AlexIA funciona?
            </SingleHomeQuestionTitle>
            <SingleHomeQuestionText>
              A AlexandrIA utiliza uma base de dados FHIR para compreender os
              problemas dos pacientes e gerar diagnósticos médicos precisos.
            </SingleHomeQuestionText>
          </SingleHomeQuestion>
        </HomeQuestionsContainer>
      </HomeQuestions>
      <PageUnderline></PageUnderline>
      <HomeNewsletter>
        <HomeNewsletterTitle>
          Receba atualizações sobre AlexIA
        </HomeNewsletterTitle>
        <HomeNewsletterInfo>
          Se inscreva em nossa newsletter e receba as noticias mais recentes
          sobre AlexIA
        </HomeNewsletterInfo>
        <HomeNewsletterEmailInput placeholder="Digite seu e-mail"></HomeNewsletterEmailInput>
        <HomeNewsletterSubscribeBtn>Inscrever-se</HomeNewsletterSubscribeBtn>
        <HomeNewsletterSocialMedia>
          <Link to="https://www.instagram.com/" target="_blank">
          <InstagramIcon src={InstaIcon}></InstagramIcon>
          </Link>
          <Link to="https://www.facebook.com/" target="_blank">
          <FacebookIcon src={faceIcon}></FacebookIcon>
          </Link>
        </HomeNewsletterSocialMedia>
      </HomeNewsletter>
      <Footer/>
    </>
  );
}

export default home;
