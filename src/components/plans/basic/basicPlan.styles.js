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

export const SinglePlanContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  padding:40px 0px;
`;

export const SinglePlan = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items:center;
  border: 1px solid #000;
  padding: 20px;
  @media(max-width:900px){
    display:block;
    text-align:center;
  }
`;

export const SinglePlanBox = styled.div`
  padding: 20px;
`;

export const SinglePlanTitle = styled.h3``;

export const SinglePlanDescription = styled.p`
  width:60%;
  @media(max-width:900px){
    width:100%;
  }
`;

export const SinglePlanBtn = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  transition: .5s;
  cursor: pointer;
  &:hover{
    opacity:0.8;
  }
`;

export const SinglePlanPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`

export const SinglePlanPrice = styled.div`
  font-weight:900;
  font-size:30px
`;

export const PlanUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;
export const PlanUserEmail = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  padding:10px 0px;
  width: 30%;
`;

export const PlanUserLabel = styled.label`
  padding-bottom:5px;
`;

export const PlanUserInput = styled.input`
  width:120%;
  height:30px;
  border-radius:5px;
  border:1px solid grey;
  padding-left:10px;
`;

export const PlanUserCNPJ = styled.div`
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