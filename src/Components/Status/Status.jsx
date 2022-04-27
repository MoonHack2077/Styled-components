import React from 'react';
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

export { Status }