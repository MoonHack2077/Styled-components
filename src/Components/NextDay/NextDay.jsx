import React from 'react'
import { Container, StateImg , Span } from './NextDay.style.js'

function NextDay() {
  return (
    <Container>
      <Span>{'day'}</Span>
      <StateImg src={''} />
      <Span>{'temperature'}</Span>
    </Container>
  )
}

export { NextDay }