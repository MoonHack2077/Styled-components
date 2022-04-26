import React from 'react';
import { Container , Type , Data , DataNumber } from './Status.style.js';

function Status( { type , measure } ) {
  return (
      <Container>
        <Type>{ type }</Type>
        <Data>
          <DataNumber>{ type }</DataNumber>{ measure }
        </Data>
      </Container>
  )
}

export { Status }