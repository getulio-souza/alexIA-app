import styled from 'styled-components'

export const ContactNavbar = styled.div`
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

export const ContactHeaderText = styled.div`
  margin:150px;
  display: flex;
  justify-content:center;
  

`;

export const ContactHeaderTitle = styled.h2`
  font-size:40px;
  color:#1E1E1E;
  border: 2px solid black;
  padding: 50px;
  text-align: center;
  width:30%;
`;

export const ContactQuestions = styled.div`
  padding:40px;
  margin: 100px 0%
`;
export const InstagramTitle = styled.h2`
  margin:0px 0px 50px 200px;
  text-decoration: underline;
`;
export const PostInstaContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
`;

export const InstagramPost = styled.div`
margin: 0px -100px
`;

export const InstagramImg = styled.div`
`;

export const ContactNewsletter = styled.div`
  padding:40px;
  text-align:center;
  display:flex;
  flex-direction:column;
`;

export const ContactNewsletterTitle = styled.h2`
  margin: 0 auto;
  padding-bottom:20px;
  font-size:34px;
`;

export const ContactNewsletterInfo = styled.p`
  font-size:12px;
  width:30%;
  margin: 0 auto;
  padding-bottom:20px;
`;


export const ContactSuggestionBtn = styled.button`
  border:none;
  background-color:#1F1F1F;
  color:#fff;
  width: 15%;
  padding:20px;
  margin: 0 auto;
  margin-top:20px;
  margin-bottom:200px;
  border-radius: 10px;
  font-size:20px;
  cursor:pointer;
  transition: 0.5s;;
  &:hover{
    opacity:0.9;
  }
`;

export const ContactNewsletterSocialMedia = styled.div`
  display:flex;
  gap:40px;
  justify-content:center;
  padding-top:40px
`;

export const ContactFooter = styled.div`
  display:flex;
  flex-direction: column;
  border-top: solid 2px black;
  text-align:center;
`;

export const ContactFooterIcon = styled.div`
`;
export const ContactFooterCopyright = styled.p`
  color: white;
  `;
  export const ContactFooterEmail = styled.h1`

`;
