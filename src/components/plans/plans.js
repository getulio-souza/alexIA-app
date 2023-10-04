import React from "react";

import {
  PlansTitle,
  PlansSubtitle,
  SinglePlanContainer,
  SinglePlan,
  SinglePlanBox,
  SinglePlanPriceBox,
  SinglePlanTitle,
  SinglePlanDescription,
  SinglePlanBtn,
  SinglePlanPrice,
  HomeFooter,
  HomeFooterIcon,
  HomeFooterCopyright
} from "./plans.styles";

import lines from '../../assets/10.png'
import Navbar from "../navbar/navbar";


function Plans() {
  return (
    <>
      <Navbar/>
      <PlansTitle>Planos</PlansTitle>
      <PlansSubtitle>
        AlexIA tem diversos planos para atender seus clientes, escolha o mais
        eficiente para você, e tenha acesso imediato
      </PlansSubtitle>
      <SinglePlanContainer>
        <SinglePlan>
          <SinglePlanBox>
            <SinglePlanTitle>Plano Basic</SinglePlanTitle>
            <SinglePlanDescription>O plano Basic te dá as funcionalidades fundamentais de AlexIA, é possível fazer triagens gerais, com um tempo maior de espera, é ideal para quem quer testar o produto sem investir tanto.</SinglePlanDescription>
            <SinglePlanBtn>Saiba mais</SinglePlanBtn>
          </SinglePlanBox>
          <SinglePlanPriceBox>
            <SinglePlanPrice>R$</SinglePlanPrice>
            <SinglePlanPrice>299.90</SinglePlanPrice>
          </SinglePlanPriceBox>
        </SinglePlan>
        <SinglePlan>
          <SinglePlanBox>
            <SinglePlanTitle>Plano Platinum</SinglePlanTitle>
            <SinglePlanDescription>O plano starter te dá todas as funcionalidades da AlexIA, porém, com um tempo maior de espera e uma quantidade de usuários simultâneos limitados.</SinglePlanDescription>
            <SinglePlanBtn>Saiba mais</SinglePlanBtn>
          </SinglePlanBox>
          <SinglePlanPriceBox>
          <SinglePlanPrice>R$</SinglePlanPrice>
          <SinglePlanPrice>599.90</SinglePlanPrice>
          </SinglePlanPriceBox>
        </SinglePlan>
        <SinglePlan>
          <SinglePlanBox>
            <SinglePlanTitle>Plano Diamond</SinglePlanTitle>
            <SinglePlanDescription>O plano starter te dá todas as funcionalidades da AlexIA, porém, com um tempo maior de espera e uma quantidade de usuários simultâneos limitados.</SinglePlanDescription>
            <SinglePlanBtn>Saiba mais</SinglePlanBtn>
          </SinglePlanBox>
          <SinglePlanPriceBox>
            <SinglePlanPrice>R$</SinglePlanPrice>
            <SinglePlanPrice>999.90</SinglePlanPrice>
          </SinglePlanPriceBox>
        </SinglePlan>
      </SinglePlanContainer>
      <HomeFooter>
        <HomeFooterIcon src={lines}></HomeFooterIcon>
        <HomeFooterCopyright>
          Direitos autorais AlexIA Plataforma de Saúde
        </HomeFooterCopyright>
      </HomeFooter>
    </>
  );
}

export default Plans;
