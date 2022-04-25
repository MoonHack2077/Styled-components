import React from 'react';
import { Container , Type , Data , DataNumber } from './Status.style.js';

function Status() {
  return (
      <Container>
        <Type>{'prop'}</Type>
        <Data>
          <DataNumber>{'prop.number'}</DataNumber>{'prop.measure'}
        </Data>
      </Container>
  )
}

export { Status }