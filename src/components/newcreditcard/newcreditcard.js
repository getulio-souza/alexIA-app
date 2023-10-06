import React from "react";

import { Link } from "react-router-dom";

import {
  PlansTitle,
  PlansTitleContainer,
  CvvInput,
  CreditCardArea,
  CardNumberContainer,
  CardProcessLabel,
  CardUserInput,
  CardNameContainer,
  InputWrapper,
  PlanUserPayment,
  PlanUserCreditCardTitle,
  PlanUserCreditCardSelect,
  InfContainers,
  PlanConfirmBtn
} from "./newcreditcard.styles";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function newcreditcard() {


  return (
    <>
      <Navbar />

      <PlansTitleContainer>
        <PlansTitle>Adicionar novo Cartão</PlansTitle>
      </PlansTitleContainer>

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
          <InputWrapper>
            <PlanUserCreditCardTitle>CVV</PlanUserCreditCardTitle>
            <CvvInput
              maxLength={3}
            ></CvvInput>
          </InputWrapper>
          <InfContainers>
            <InputWrapper>
              <PlanUserCreditCardTitle>Validade</PlanUserCreditCardTitle>
              <CvvInput
                maxLength={16}
              ></CvvInput>
            </InputWrapper>

            <PlanUserCreditCardSelect
            > <option disabled selected>YYYY</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
            </PlanUserCreditCardSelect>
          </InfContainers>
        </PlanUserPayment>

        <PlanConfirmBtn>Adicionar Cartão</PlanConfirmBtn>
      </CreditCardArea>
      
      <Footer/>
    </>

  );
}

export default newcreditcard;