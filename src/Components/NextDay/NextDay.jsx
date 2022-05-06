import React from 'react'
import PropTypes from 'prop-types'
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

NextDay.propTypes = {
  date: PropTypes.string,
  min_temp: PropTypes.string,
  max_temp: PropTypes.string,
  img: PropTypes.string
}

export { NextDay }