import styled from "styled-components";

export const ChatbotHeader = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#000;
  width:60%;
  margin:0 auto;
  border-radius:0px 0px 10px 10px;
`
export const ChatbotHeaderTitle = styled.h1`
  color:#fff;
`;

export const ChatbotContainer = styled.div`
  
`;

export const ChatBotQuestions = styled.div`
  padding:40px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap:20px;
`;

export const ChatBotIcon = styled.img`
  width:40px;
`;

export const UserIcon = styled.img`
  width:40px;
`;

export const ChatBotQuestion = styled.div`
  background-color:#D9D9D9;
  width:60%;
  padding: 15px 10px;
  border-radius: 0px 10px 10px 10px;
`;

export const ChatBotMessage = styled.p`
  display:flex;
  flex-direction: column;
  gap:20px;
`;

export const ChatBotMessageOptionContainer = styled.div`
  display:flex;
  /* gap:5px; */
  column-gap:5px;
  flex-wrap:wrap;
`;

export const ChatBotMessageOption = styled.div`
  display:flex;
`;

export const ChatBotCheck = styled.input`
`;

export const ChatBotOption = styled.p``;

export const LoginBtn = styled.button`
  width:20%;
  padding:10px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  border:1px solid #000;
  transition: 0.5s;
  &:hover{
    opacity:0.9;
  }
   @media(max-width:900px){
    width:100%;
  }
`;

export const ChatBotAnswers = styled.div`
  padding:40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  gap:20px;
`;

export const ChatBotAnswer = styled.div`
  background-color:#E8DEDE;
  width:fit-content;
  padding: 5px 10px;
  border-radius: 0px 10px 10px 10px;
`;

export const ChatBotAnswerMessage = styled.p`
`;

export const ChatBotPainLevel = styled.article`
  padding-bottom:20px;
`;

export const ChatBotPainLevelBtn = styled.button`
  width:20%;
  height:30px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  border:1px solid #000;
  transition: 0.5s;
  &:hover{
    opacity:0.9;
  }
  @media(max-width:900px){
    width:100%;
  }
`;

export const ChatBotSinglePain = styled.div``;

export const ChatBotSinglePainTitle = styled.p``;

export const ChatBotSinglePainSelect = styled.select`
  width:90%;
`;

export const ChatBotButtonsBox = styled.div`
  display:flex;
  gap:10px;
  
`;

export const ChatBoxConfirmBtn = styled.button`
  width:20%;
  height:30px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  border:1px solid #000;
  transition: 0.5s;
  &:hover{
    opacity:0.9;
  }
`;

export const ChatBoxCancelBtn = styled.button`
  width:20%;
  height:30px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  border:1px solid #000;
  transition: 0.5s;
  &:hover{
    opacity:0.9;
  }
  @media(max-width:900px){
    width:40%;
  }
`;
  
export const ChatBotInputContainer = styled.div`
  display:flex;
  /* gap:10px; */
  padding: 0px 0px 10px 10px;
  width:100%;
  @media(max-width:900px){
    width:95%;
  }
`;

export const ChatBotInput = styled.input`
  width: 90%;
`;

export const ChatInputBtn = styled.button`
border:none;
background-color:transparent;
`;

export const ChatInputIcon = styled.img`
  width:30px;
`