import React from 'react'
import { Container, StateImg , Span } from './NextDay.style.js'

function NextDay( { date , min_temp , max_temp , img } ) {
  return (
    <Container>
      <Span>{ date }</Span>
      <StateImg src={ img } />
      <Span><Span className='maxTemp'>{ max_temp }</Span>{ min_temp }</Span>
    </Container>
  )
}

export { NextDay }