import React from 'react'
import { Container, StateImg , StyledSpan } from './NextDay.style.js'

function NextDay() {
  return (
    <Container>
      <StyledSpan>{'day'}</StyledSpan>
      <StateImg src={''} />
      <StyledSpan>{'temperature'}</StyledSpan>
    </Container>
  )
}

export { NextDay }