import React from 'react'

import {
  HomeNavbar,
  HomeHeader,
  HomeBenefits,
  HomeQuestions,
  HomeNewsletter
} from './home.styles' 

function home() {
  return (
    <>
    <HomeNavbar></HomeNavbar>
    <HomeHeader></HomeHeader>
      <HomeBenefits></HomeBenefits>
      <HomeQuestions></HomeQuestions>
      <HomeNewsletter></HomeNewsletter>
    </>
  )
}

export default home