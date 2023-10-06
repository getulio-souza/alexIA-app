import styled from "styled-components";

export const PlansTitle = styled.h2`
  text-align:center;
  padding:40px;
  border: solid 2px black;
  width:15%;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const PlansTitleContainer = styled.div`
width:100%
`;

export const CreditCardArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;
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
  width:100%;
  height:30px;
  border-radius:5px;
  border:1px solid grey;
  padding-left:10px;
`;


export const CvvInput = styled.input`

  height:30px;
  border-radius:5px;
  border:1px solid grey;
  padding-left:10px;
  width: 90%;
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
  flex-direction:row;
  align-items:flex-start;
  justify-content: space-between;
  gap: 30px;
`;

export const PlanUserCreditCardTitle = styled.label`
  padding-bottom:5px;
`;

export const PlanUserCreditCardSelect = styled.select`
  height:34px;
  border-radius:5px;
  background-color: transparent;
  border:1px solid grey;
  cursor: pointer;
  padding-left:10px;
  background-color:white;
`;

export const InfContainers = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  

`;

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;

`;

export const PlanUserPortionOption = styled.text`
  height:30px;
  border-radius:5px;
  border:1px solid grey;
  background-color: transparent;
  cursor: pointer;
`;

export const CvvOption = styled.text`
  
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