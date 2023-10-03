import React from "react";

import {
  HomeNavbar,
  KnowMore,
  Plans,
  Contact,
  HomeHeader,
  PageUnderline,
  HomeHeaderText,
  HomeHeaderTitle,
  HomeHeaderDescription,
  HomeHeaderImg,
  HomeBenefits,
  GenericBorder,
  SingleBenefit,
  SingleBenefitText,
  SingleBenefitTitle,
  SingleBenefitDescription,
  SingleBenefitImg,
  HomeQuestions,
  HomeNewsletter,
} from "./home.styles";

import alexia from '../../assets/ia-second-example.jpg'
import pacientAndDoctor from '../../assets/patient-and-doctor.jpg'

function home() {
  return (
    <>
      <HomeNavbar>
        <KnowMore>Saiba mais</KnowMore>
        <Plans>Planos</Plans>
        <Contact>Contato</Contact>
      </HomeNavbar>
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
        </HomeHeaderText>
        <HomeHeaderImg src={alexia}></HomeHeaderImg>
      </HomeHeader>
      <PageUnderline></PageUnderline>
      <HomeBenefits>
        <GenericBorder>
          <SingleBenefit>
            <SingleBenefitText>
            <SingleBenefitTitle>Chat Privado,Dinâmico e Eficaz</SingleBenefitTitle>
            <SingleBenefitDescription>O paciente interage diretamente com a AlexIA por meio de um chat privado para realizar sua triagem com rapidez e segurança.</SingleBenefitDescription>
            </SingleBenefitText>
            <SingleBenefitImg src={pacientAndDoctor}></SingleBenefitImg>
          </SingleBenefit>
        </GenericBorder>
      </HomeBenefits>
      <HomeQuestions></HomeQuestions>
      <HomeNewsletter></HomeNewsletter>
    </>
  );
}

export default home;
