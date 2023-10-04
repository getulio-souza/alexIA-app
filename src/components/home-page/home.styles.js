import styled from 'styled-components'

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

export const SingleBenefitImgBox = styled.div``

export const SingleBenefitImg = styled.img`
  width: 30%;
  height: 30%;
`;

export const HomeQuestions = styled.div`
  padding:40px;
`;
export const HomeQuestionsTitle = styled.h2`
  text-align:center;
  padding-bottom:40px;
`;
export const HomeQuestionsContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
  gap:30px;
`;

export const SingleHomeQuestion = styled.div`
  width:25%;
`;
export const SingleHomeQuestionTitle = styled.h3``;
export const SingleHomeQuestionText = styled.p``;

export const HomeNewsletter = styled.div`
  padding:40px;
  text-align:center;
  display:flex;
  flex-direction:column;
`;

export const HomeNewsletterTitle = styled.h2`
  width:28%;
  margin: 0 auto;
  padding-bottom:20px;
`;

export const HomeNewsletterInfo = styled.p`
  font-size:12px;
  width:30%;
  margin: 0 auto;
  padding-bottom:20px;
`;

export const HomeNewsletterEmailInput = styled.input`
  width:413px;
  height:41px;
  border-radius:10px;
  border: 1px solid #8E8484;
  margin-bottom: 20px;
  margin: 0 auto;
  font-size: 20px;
  padding-left:2%;
  text-align:center;
`;

export const HomeNewsletterSubscribeBtn = styled.button`
  border:none;
  background-color:#1F1F1F;
  color:#fff;
  width: 20%;
  height:40px;
  margin: 0 auto;
  margin-top:20px;
  border-radius: 20px;
  cursor:pointer;
  transition: 0.5s;;
  &:hover{
    opacity:0.9;
  }
`;

export const HomeNewsletterSocialMedia = styled.div`
  display:flex;
  gap:40px;
  justify-content:center;
  padding-top:40px
`;

export const InstagramIcon = styled.img`
  width: 20px;
  cursor:pointer;
  transition: 0.5s;;
  &:hover{
    opacity:0.8;
  }
`;

export const FacebookIcon = styled.img`
  width: 20px;
  cursor:pointer;
  transition: 0.5s;;
  &:hover{
    opacity:0.8;
  }
`;