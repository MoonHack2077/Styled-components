import React from 'react'
import PropTypes from 'prop-types'
import { Container, StateImg , Span } from './NextDay.style.js'

function NextDay( { date , min_temp , max_temp , img } ) {
  return (
    <Container>
      <Span>{ date }</Span>
      <StateImg src={ img } />
      <Span><Span className='maxTemp'>{ max_temp }°C</Span>{ min_temp }°C</Span>
    </Container>
  )
}

NextDay.propTypes = {
  date: PropTypes.string,
  min_temp: PropTypes.number,
  max_temp: PropTypes.number,
  img: PropTypes.string
}

export { NextDay }