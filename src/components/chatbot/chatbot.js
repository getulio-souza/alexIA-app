import React, { useState } from "react";

import {
  ChatbotHeader,
  ChatbotHeaderTitle,
  ChatbotContainer,
  ChatBotInputContainer,
  ChatBotIcon,
  UserIcon,
  ChatBotQuestions,
  ChatBotQuestion,
  ChatBotMessage,
  ChatBotMessageOptionContainer,
  ChatBotMessageOption,
  ChatBotCheck,
  ChatBotOption,
  LoginBtn,
  ChatBotAnswers,
  ChatBotAnswer,
  ChatBotAnswerMessage,
  ChatBotInput,
  ChatInputBtn,
  ChatInputIcon,
  ChatBotPainLevel,
  ChatBotPainLevelBtn,
  ChatBotSinglePain,
  ChatBotSinglePainTitle,
  ChatBotSinglePainSelect,
  ChatBotButtonsBox,
  ChatBoxConfirmBtn,
  ChatBoxCancelBtn
} from "./chatbot.styles";

import chatBotIcon from '../../assets/chatbot.png'
import userIcon from '../../assets/user.png'
import sendIcon from '../../assets/send-btn.png'

function Chatbot() {
  // const [messages, setMessages] = useState([]);

  // const handleSendMessage = (message) => {
  //   setMessages([...messages, { text: message, user: "user" }]);
  // };

  return (
    <>
      <ChatbotHeader>
        <ChatbotHeaderTitle>AlexIA</ChatbotHeaderTitle>
      </ChatbotHeader>
      <ChatbotContainer>
        {/* {messages.map((message, index) => (
          <div key={index} className={message.user}>
            {message.text}
          </div>
        ))} */}

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              Olá! Tudo bem? Meu nome é AlexIA, responsável pela triagem da xxxx
            </ChatBotMessage>
          </ChatBotQuestion>
          <ChatBotQuestion>
            <ChatBotMessage>
              Antes de tudo, preciso que você faça o login, para que possa
              enviar suas informaçõe para o seu médico. Lembrando que o login é
              o mesmo usado no seu plano de saúde.
              <LoginBtn>logar</LoginBtn>
            </ChatBotMessage>
          </ChatBotQuestion>
          <ChatBotQuestion>
            <ChatBotMessage>
              Certo!! Agora podemos começar, o que vem sentindo, Guilherme?
              Selecione até 5 de seus principais incômodos:
              <ChatBotMessageOptionContainer>
                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Congestão Nasal</ChatBotOption>
                </ChatBotMessageOption>

                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Febre</ChatBotOption>
                </ChatBotMessageOption>

                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Tosse</ChatBotOption>
                </ChatBotMessageOption>

                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Dor de cabeça</ChatBotOption>
                </ChatBotMessageOption>

                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Coriza</ChatBotOption>
                </ChatBotMessageOption>

                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Tontura</ChatBotOption>
                </ChatBotMessageOption>

                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Dores no corpo</ChatBotOption>
                </ChatBotMessageOption>

                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Fadiga</ChatBotOption>
                </ChatBotMessageOption>

                <ChatBotMessageOption>
                  <ChatBotCheck type="checkbox"></ChatBotCheck>
                  <ChatBotOption>Diarreia</ChatBotOption>
                </ChatBotMessageOption>
              </ChatBotMessageOptionContainer>
            </ChatBotMessage>
          </ChatBotQuestion>
        </ChatBotQuestions>

        <ChatBotAnswers>
          <UserIcon src={userIcon}></UserIcon>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Congestão Nasal</ChatBotAnswerMessage>
          </ChatBotAnswer>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Febre</ChatBotAnswerMessage>
          </ChatBotAnswer>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Dor de cabeça</ChatBotAnswerMessage>
          </ChatBotAnswer>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Coriza</ChatBotAnswerMessage>
          </ChatBotAnswer>
        </ChatBotAnswers>

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              Entendi, sinto muito! Há aproximadamente quanto tempo vem se sentindo assim?
            </ChatBotMessage>
          </ChatBotQuestion>
        </ChatBotQuestions>

        <ChatBotAnswers>
          <UserIcon src={userIcon}></UserIcon>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Aproximadamente 5 dias.</ChatBotAnswerMessage>
          </ChatBotAnswer>
        </ChatBotAnswers>

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              Guilherme, por favor, pode classificar cada um de seus incômodos em graus? Pode selecionar leve, moderado ou grave.
            </ChatBotMessage>

            <ChatBotPainLevel>
              <ChatBotSinglePain>
                <ChatBotSinglePainTitle>Dor de cabeça</ChatBotSinglePainTitle>
                <ChatBotSinglePainSelect>
                  <optgroup>
                    <option>leve</option>
                    <option>moderada</option>
                    <option>intensa</option>
                  </optgroup>
                </ChatBotSinglePainSelect>
              </ChatBotSinglePain>

              <ChatBotSinglePain>
                <ChatBotSinglePainTitle>Febre</ChatBotSinglePainTitle>
                <ChatBotSinglePainSelect>
                  <optgroup>
                    <option>leve</option>
                    <option>moderada</option>
                    <option>intensa</option>
                  </optgroup>
                </ChatBotSinglePainSelect>
              </ChatBotSinglePain>

              <ChatBotSinglePain>
                <ChatBotSinglePainTitle>Coriza</ChatBotSinglePainTitle>
                <ChatBotSinglePainSelect>
                  <optgroup>
                    <option>leve</option>
                    <option>moderada</option>
                    <option>intensa</option>
                  </optgroup>
                </ChatBotSinglePainSelect>
              </ChatBotSinglePain>
            </ChatBotPainLevel>

            <ChatBotPainLevelBtn>finalizar</ChatBotPainLevelBtn>
            
          </ChatBotQuestion>
        </ChatBotQuestions>

        <ChatBotAnswers>
          <UserIcon src={userIcon}></UserIcon>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Finalizar</ChatBotAnswerMessage>
          </ChatBotAnswer>
        </ChatBotAnswers>

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              Certo, tudo anotado por aqui! Gostaria de saber se você fez uso de alguma medicação nesse período.
            </ChatBotMessage>
            <p style={{fontSize:'12px', fontWeight:'700'}}> Obs: lembre-se sempre que usar medicamentos sem o auxílio de um médico pode te prejudicar!!</p>
          </ChatBotQuestion>
        </ChatBotQuestions>

        <ChatBotAnswers>
          <UserIcon src={userIcon}></UserIcon>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Sim, meu farmaceutico de confiança me recomendou tomar xxxxx e yyyyyy, mas ambos não fizeram efeito e ainda continuo me sentindo mal. </ChatBotAnswerMessage>
          </ChatBotAnswer>
        </ChatBotAnswers>

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              Certo, tudo foi anotado e logo mais será passado para o seu médico geral.
            </ChatBotMessage>
          </ChatBotQuestion>
          <ChatBotQuestion>
             <ChatBotMessage>
              O seu caso foi dado como “LEVE”, um médico pode levar até 1:30hrs para te chamar. A espera é muito importante para entender mais sobre seu diagnóstico e tratar corretamente, para que o problema não venha a piorar ou ressurgir no futuro
            </ChatBotMessage>
          </ChatBotQuestion>
          <ChatBotQuestion>
            <ChatBotMessage>Você pode ser chamado para que possam aferir sua temperatura e pressão, mas o atendimento será rápido!</ChatBotMessage>
          </ChatBotQuestion>
          <ChatBotQuestion>
            <ChatBotMessage>Muito obrigada por usar AlexIA! Você poderia avaliar o seu atendimento?</ChatBotMessage>
            <ChatBotButtonsBox>
              <ChatBoxConfirmBtn>Sim</ChatBoxConfirmBtn>
              <ChatBoxCancelBtn>Não</ChatBoxCancelBtn>
            </ChatBotButtonsBox>
          </ChatBotQuestion>
        </ChatBotQuestions>

        <ChatBotAnswers>
          <UserIcon src={userIcon}></UserIcon>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Sim!</ChatBotAnswerMessage>
          </ChatBotAnswer>
        </ChatBotAnswers>

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              De 0-10, quanto você avaliaria a AlexIA para seus amigos?
            </ChatBotMessage>
          </ChatBotQuestion>
        </ChatBotQuestions>

        <ChatBotAnswers>
          <UserIcon src={userIcon}></UserIcon>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>10</ChatBotAnswerMessage>
          </ChatBotAnswer>
        </ChatBotAnswers>

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              De 0-10, quanto você avaliaria a linguagem de AlexIA?
            </ChatBotMessage>
          </ChatBotQuestion>
        </ChatBotQuestions>

        <ChatBotAnswers>
          <UserIcon src={userIcon}></UserIcon>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>10</ChatBotAnswerMessage>
          </ChatBotAnswer>
        </ChatBotAnswers>

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              Gostaria de deixar alguma sugestão a AlexIA? Escreva abaixo.
            </ChatBotMessage>
          </ChatBotQuestion>
        </ChatBotQuestions>

        <ChatBotAnswers>
          <UserIcon src={userIcon}></UserIcon>
          <ChatBotAnswer>
            <ChatBotAnswerMessage>Sim!! AlexIA é um ótimo chat, tem respostas rápidas e é muito direta, ajuda muito a agilizar consultas.</ChatBotAnswerMessage>
          </ChatBotAnswer>
        </ChatBotAnswers>

        <ChatBotQuestions>
          <ChatBotIcon src={chatBotIcon}></ChatBotIcon>
          <ChatBotQuestion>
            <ChatBotMessage>
              Muito obrigada pela avaliação, me ajuda muito a melhorar!!
            </ChatBotMessage>
          </ChatBotQuestion>
          <ChatBotQuestion>
            <ChatBotMessage>
              Boa sorte em sua consulta! Melhoras!
            </ChatBotMessage>
          </ChatBotQuestion>
        <ChatBotButtonsBox>
              <ChatBoxConfirmBtn>Finalizar</ChatBoxConfirmBtn>
              <ChatBoxCancelBtn>Mais sugestões</ChatBoxCancelBtn>
        </ChatBotButtonsBox>
        </ChatBotQuestions>
      </ChatbotContainer>

      <ChatBotInputContainer>
        <ChatBotInput
          type="text"
          placeholder="Digite uma mensagem..."
          // onKeyPress={(e) => {
          //   if (e.key === "Enter") {
          //     handleSendMessage(e.target.value);
          //     e.target.value = "";
          //   }
          // }}
        ></ChatBotInput>
        <ChatInputBtn>
          <ChatInputIcon src={sendIcon}></ChatInputIcon>
        </ChatInputBtn>
      </ChatBotInputContainer>
    </>
  );
}

export default Chatbot;
