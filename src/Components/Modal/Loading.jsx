import React from 'react'
import { Container } from './Loading.style.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTornado } from '@fortawesome/free-solid-svg-icons';

function Loading() {
  return (
    <Container>
        <FontAwesomeIcon className='tornado' icon={ faTornado } />
    </Container>    
  )
}

export { Loading }