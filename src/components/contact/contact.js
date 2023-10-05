import React from "react";

import {
  ContactHeaderText,
  ContactHeaderTitle,
  PostsTitle,
  ContactQuestions,
  PostInstaContainer,
  InstagramPost,
  InstagramPostTitle,
  InstagramPostIcon,
  ContactNewsletter,
  ContactNewsletterTitle,
  ContactSuggestionBtn,
  ContactFooter,
  ContactFooterEmail,
  ContactFooterEmailInfo,
} from "./contact.styles";

import Footer from "../footer/footer";
import Navbar from "../../components/navbar/navbar";

import icon1 from '../../assets/relatorio-medico.png'
import icon2 from '../../assets/batimento-cardiaco.png'
import icon3 from '../../assets/medicina-alternativa.png'

function contact() {
  return (
    <>
      <Navbar />
      <ContactHeaderText>
        <ContactHeaderTitle>Nossos canais de comunicação</ContactHeaderTitle>
      </ContactHeaderText>
      <ContactQuestions>
        <PostsTitle>Ultimos posts</PostsTitle>
        <PostInstaContainer>
          <InstagramPost>
            <InstagramPostTitle>
              Como a AlexIA pode revolucionar a triagem
            </InstagramPostTitle>
            <InstagramPostIcon src={icon1}></InstagramPostIcon>
          </InstagramPost>

          <InstagramPost>
            <InstagramPostTitle>
              Como a AlexIA pode revolucionar a triagem
            </InstagramPostTitle>
            <InstagramPostIcon src={icon2}></InstagramPostIcon>
          </InstagramPost>

          <InstagramPost>
            <InstagramPostTitle>
              Como a AlexIA pode revolucionar a triagem
            </InstagramPostTitle>
            <InstagramPostIcon src={icon3}></InstagramPostIcon>
          </InstagramPost>
        </PostInstaContainer>
      </ContactQuestions>

      <ContactNewsletter>
        <ContactNewsletterTitle>
          Envie sugestões de melhorias para AlexIA
        </ContactNewsletterTitle>
        <ContactSuggestionBtn>Enviar sugestão</ContactSuggestionBtn>
      </ContactNewsletter>

      <ContactFooter>
        <ContactFooterEmail>E-mail:</ContactFooterEmail>
        <ContactFooterEmailInfo>suporte@alexia.com.br</ContactFooterEmailInfo>
        <Footer />
      </ContactFooter>
    </>
  );
}

export default contact;
