import styled from 'styled-components'

export const HomeNavbar = styled.div`
  background-color: #1E1E1E;
  width: 639px;
  height: 61px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  border-radius:15px;
`;

export const KnowMore = styled.h3`
  font-size:24px;
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
`;

export const OurPlans = styled.h3`
  font-size:24px;
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
`;

export const Contact = styled.h3`
  font-size:24px;
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
`;

//plans structure

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
  margin: 20px;
  padding: 20px;
`;

export const SinglePlanBox = styled.div`
  padding: 20px;
`;

export const SinglePlanTitle = styled.h3``;
export const SinglePlanDescription = styled.p`
  width:60%;
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

export const HomeFooter = styled.div`
  text-align:center;
`;

export const HomeFooterIcon = styled.img`
  width:90px;
  color:#000;
`;
export const HomeFooterCopyright = styled.p`
  font-size:12px;
`;