import React from 'react'
import { Container } from './Loading.style.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Loading() {
  return (
    <Container>
        <FontAwesomeIcon className='spinner white' icon={ faSpinner } />
        <FontAwesomeIcon className='spinner gray' icon={ faSpinner } />
    </Container>    
  )
}

export { Loading }