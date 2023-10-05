import styled from "styled-components";

export const PlansTitle = styled.h2`
  text-align:center;
  padding-top:40px;
`;

export const PlansSubtitle = styled.h6`
  text-align:center;
  min-width:30%;
  width:30%;
  max-width:30%;
  margin:0 auto;
`;


export const CreditCardArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;
export const CardNumberContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  padding:10px 0px;
  width: 30%;
`;

export const CardProcessLabel = styled.label`
  padding-bottom:5px;
`;

export const CardUserInput = styled.input`
  width:120%;
  height:30px;
  border-radius:5px;
  border:1px solid grey;
  padding-left:10px;
`;

export const CardNameContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  padding:10px 0px;
  width: 30%;
`;

export const PlanUserPayment = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  padding:10px 0px;
  width:30%;
`;

export const PlanUserCreditCardTitle = styled.label`
  padding-bottom:5px;
`;

export const PlanUserCreditCardSelect = styled.select`
  min-width:120%;
  height:30px;
  border-radius:5px;
  background-color: transparent;
  border:1px solid grey;
  cursor: pointer;
`;

export const PlanUserPaymentPortion = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  padding:10px 0px;
  width:30%;

`;

export const PlanUserPortionOption = styled.select`
  min-width:120%;
  height:30px;
  border-radius:5px;
  border:1px solid grey;
  background-color: transparent;
  cursor: pointer;
`;

export const CvvOption = styled.select`
  min-width:120%;
  height:30px;
  border-radius:5px;
  border:1px solid grey;
  background-color: transparent;
  cursor: pointer;
`;

export const PlanConfirmBtn = styled.button`
  margin-top:20px;
  width:150px;
  height:40px;
  background-color:#1F1F1F;
  color:#fff;
  border-radius:10px;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
`;