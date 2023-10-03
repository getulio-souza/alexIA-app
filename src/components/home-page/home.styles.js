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
`
export const Plans = styled.h3`
  font-size:24px;
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
`
export const Contact = styled.h3`
  font-size:24px;
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
`
export const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

export const HomeHeaderText = styled.div`
  width:50%;
`;

export const HomeHeaderTitle = styled.h2`
  font-size:40px;
  color:#1E1E1E;
`;

export const HomeHeaderDescription = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color:#1F1F1F;
`;

export const PageUnderline = styled.div`
  width: 40%;
  height:1px;
  background-color: #000;
  margin: 0 auto;
`;

export const HomeHeaderImg = styled.img``;

export const HomeBenefits = styled.div``;
export const GenericBorder = styled.div``;


export const SingleBenefit = styled.div`
  display:flex;
  justify-content: center;
  padding:40px;
  /* border:1px solid #000; */
`;

export const SingleBenefitText = styled.div`
  width:30%;
  padding: 40px;

`;

export const SingleBenefitTitle = styled.h3``;

export const SingleBenefitDescription = styled.p``;

export const SingleBenefitImg = styled.img`
  width: 30%;
  height: 30%;
`;

export const HomeQuestions = styled.div``;
export const HomeNewsletter = styled.div``;