import React from 'react';
import PropTypes from 'prop-types';
import { Container , Type , Data , DataNumber } from './Status.style.js';

function Status( { type , num , measure } ) {
  return (
      <Container>
        <Type>{ type }</Type>
        <Data>
          <DataNumber>{ num }</DataNumber>{ measure }
        </Data>
      </Container>
  )
}

Status.propTypes = {
  type: PropTypes.string,
  num: PropTypes.number,
  measure: PropTypes.string
}

export { Status }