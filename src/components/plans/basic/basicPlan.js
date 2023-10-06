import React, { useState } from "react";

import {
  PlansTitle,
  SinglePlan,
  SinglePlanBox,
  SinglePlanPriceBox,
  SinglePlanTitle,
  SinglePlanDescription,
  SinglePlanPrice,
  PlanUserInfo,
  PlanUserEmail,
  PlanUserLabel,
  PlanUserInput,
  PlanUserCNPJ,
  PlanUserPayment,
  PlanUserCreditCardTitle,
  PlanUserCreditCardSelect,
  PlanUserPaymentPortion,
  PlanUserPortionOption,
  PlanConfirmBtn
} from "./basicPlan.styles";

import Navbar from "../../navbar/navbar";

function BasicPlan() {

  //logic to validate email
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isValid) {
    console.log('Email is valid', email)
  } else {
    console.log('invalid email')
  }


  return (
    <>
      <Navbar/>
      <PlansTitle>Assinatura</PlansTitle>
      <SinglePlan>
        <SinglePlanBox>
          <SinglePlanTitle>Plano Basic</SinglePlanTitle>
          <SinglePlanDescription>
            O plano Basic te dá as funcionalidades fundamentais de AlexIA, é
            possível fazer triagens gerais, com um tempo maior de espera, é
            ideal para quem quer testar o produto sem investir tanto.
          </SinglePlanDescription>
        </SinglePlanBox>
        <SinglePlanPriceBox>
          <SinglePlanPrice>R$</SinglePlanPrice>
          <SinglePlanPrice>299.90</SinglePlanPrice>
        </SinglePlanPriceBox>
      </SinglePlan>
      <PlanUserInfo onSubmit={handleSubmit}>
        <PlanUserEmail>
          <PlanUserLabel>E-mail</PlanUserLabel>
          <PlanUserInput
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="fulano_de_tal@gmail.com"
          ></PlanUserInput>
        </PlanUserEmail>
        <PlanUserCNPJ>
        <PlanUserLabel>CNPJ</PlanUserLabel>
          <PlanUserInput
            maxLength={14}
            placeholder="000.000.000/0000-00"
          ></PlanUserInput>
        </PlanUserCNPJ>
        <PlanUserPayment>
          <PlanUserCreditCardTitle>Forma de pagamento</PlanUserCreditCardTitle>
          <PlanUserCreditCardSelect>
            <option>Cartão de Crédito - Mastercard</option>
            <option>Cartão de Crédito - Visa</option>
            <option>Cartão de Crédito - Electron</option>
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
        </PlanUserPaymentPortion>
      <PlanConfirmBtn>Finalizar compra</PlanConfirmBtn>
      </PlanUserInfo>
    </>
  );
}

export default BasicPlan;
