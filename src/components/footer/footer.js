import React from 'react';

import { HomeFooter, HomeFooterIcon, HomeFooterCopyright } from './footer.styles'

import lines from '../../assets/10.png'
  
function Footer() {
  return (
    <>
    <HomeFooter>
        <HomeFooterIcon src={lines}></HomeFooterIcon>
        <HomeFooterCopyright>
          Direitos autorais AlexIA Plataforma de Saúde
        </HomeFooterCopyright>
      </HomeFooter>
    </>
  )
}

export default Footer