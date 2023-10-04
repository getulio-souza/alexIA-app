import React from 'react'
import { Link } from "react-router-dom";

import {
   HomeNavbar,
  KnowMore,
  Plans,
  Contact,
} from './navbar.styles'

function Navbar() {
  return (
    <>
    <HomeNavbar>
        <Link style={{textDecoration:'none'}} to="/knowMore">
          <KnowMore>Saiba mais</KnowMore>
        </Link>
        <Link style={{textDecoration:'none'}} to="/plans">
          <Plans>Planos</Plans>
        </Link>
        <Link style={{textDecoration:'none'}} to="/contact">
          <Contact>Contato</Contact>
        </Link>
      </HomeNavbar>
    </>
  )
}

export default Navbar