import styled from 'styled-components'

//plans structure

export const PlansTitle = styled.h2`
  text-align:center;
  padding-top:40px;
`;

export const PlansSubtitle = styled.h6`
  text-align:center;
  min-width:30%;
  width:30%;
  max-width:50%;
  margin:0 auto;
  font-size: 12px;
  @media(max-width:900px){
    width:100%;
  }
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
  max-width:50%;
  min-width:50%;
  margin: 0 auto;
  display: flex;
  align-items:center;
  border: 1px solid #000;
  margin: 20px;
  padding: 20px;
`;

export const SinglePlanBox = styled.div`
  padding: 20px;
  @media(max-width:900px){
    text-align:center;
  }
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
  @media(max-width:900px){
    display:none;
  }
`

export const SinglePlanPrice = styled.div`
  font-weight:900;
  font-size:30px
`;