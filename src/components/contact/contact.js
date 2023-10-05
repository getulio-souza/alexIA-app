import React from "react";

import { Link } from "react-router-dom";

import {
  ContactNavbar,
  ContactHeaderText,
  ContactHeaderTitle,
  InstagramTitle,
  ContactQuestions,
  PostInstaContainer,
  InstagramPost,
  ContactNewsletter,
  ContactNewsletterTitle,
  ContactSuggestionBtn,
  ContactFooter,
  ContactFooterEmail,
} from "./contact.styles";

import postInsta from "../../assets/postagem.png";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function contact() {
  return (
    <>
      <Navbar/>
      
      <ContactHeaderText>
        <ContactHeaderTitle>
          Nosso canais de comunicação
        </ContactHeaderTitle>
      </ContactHeaderText>


      <ContactQuestions>
        <InstagramTitle>Instagram</InstagramTitle>
        <PostInstaContainer>
          <InstagramPost>
            <img src={postInsta} alt="Postagem do Instagram da AlexIA" />

          </InstagramPost>
          <InstagramPost>
            <img src={postInsta} alt="Postagem do Instagram da AlexIA" />

          </InstagramPost>
          <InstagramPost>
            <img src={postInsta} alt="Postagem do Instagram da AlexIA" />

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
        <ContactFooterEmail>
          suporte@alexia.com.br
        </ContactFooterEmail>
      <Footer/>
      </ContactFooter>
    </>

  );
}

export default contact;