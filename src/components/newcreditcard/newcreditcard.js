import React from "react";

import { Link } from "react-router-dom";

import {
  PlansTitle,
  CreditCardArea,
  CardNumberContainer,
  CardProcessLabel,
  CardUserInput,
  CardNameContainer,
  CvvOption,
  PlanUserPayment,
  PlanUserCreditCardTitle,
  PlanUserCreditCardSelect,
  PlanUserPaymentPortion,
  PlanUserPortionOption,
  PlanConfirmBtn
} from "./newcreditcard.styles";

import Navbar from "../navbar/navbar";

function newcreditcard() {

  
  return (
    <>
    <Navbar/>
    
      <PlansTitle>Adicionar novo Cartão</PlansTitle>

      <CreditCardArea>
        <CardNumberContainer>
          <CardProcessLabel>Numero do Cartão</CardProcessLabel>
          <CardUserInput
        type="text"
        id="numeroCartao"
        name="numeroCartao"
        placeholder="XXXX XXXX XXXX XXXX"
        maxLength="16" //
          ></CardUserInput>
        </CardNumberContainer>
        <CardNameContainer>
        <CardProcessLabel>Nome impresso no cartão</CardProcessLabel>
          <CardUserInput
            maxLength={16}
          ></CardUserInput>
        </CardNameContainer>
        <PlanUserPayment>
          <PlanUserCreditCardTitle>Forma de pagamento</PlanUserCreditCardTitle>
          <PlanUserCreditCardSelect 
            placeholder="YYYY"
          >
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
          </PlanUserCreditCardSelect>
        </PlanUserPayment>
        <PlanUserPaymentPortion>
          <PlanUserPortionOption
            placeholder="1x de R$ 299,90"
          >
            <option>1x de R$ 299,90</option>
            <option>2x de R$ 199,90</option>
            <option>3x de R$ 99,90</option>
            <option>4x de R$ 59,90</option>
            <option>5x de R$ 29,90</option>
          </PlanUserPortionOption>
          <CvvOption
            placeholder="1x de R$ 299,90"
          >
            <option>1x de R$ 299,90</option>
            <option>2x de R$ 199,90</option>
            <option>3x de R$ 99,90</option>
            <option>4x de R$ 59,90</option>
            <option>5x de R$ 29,90</option>
          </CvvOption>
        </PlanUserPaymentPortion>
      <PlanConfirmBtn>Adicionar Cartão</PlanConfirmBtn>
      </CreditCardArea>
    </>

  );
}

export default newcreditcard;