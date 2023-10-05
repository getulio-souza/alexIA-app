import styled from 'styled-components'

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
export const PostsTitle = styled.h1`
  text-align:center;
  padding-bottom:20px;
`;

export const PostInstaContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
`;

export const InstagramPost = styled.div`
  border: 1px solid #000;
  width:200px;
  height:200px;
  box-shadow: 1px 2px 3px #000;
`;

export const InstagramPostTitle = styled.h4`
  padding:20px 40px 20px 20px;
`
export const InstagramPostIcon = styled.img`
  width:30px;
  padding-left:20px;
`;

export const ContactNewsletter = styled.div`
  padding:40px 0px 60px 0px;
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
  width: 20%;
  height:40px;
  margin: 0 auto;
  margin-top:20px;
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
  color: #fff;
`;

export const ContactFooterEmail = styled.h3`

`;

export const ContactFooterEmailInfo = styled.p`
  font-weight:500;
`;
