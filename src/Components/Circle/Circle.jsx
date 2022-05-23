import  React from 'react';
import PropTypes from 'prop-types';
import { Container , Content } from './Circle.style.js';

function Circle({ content , onClick , bg_color}){
    return(
        <Container onClick={ onClick } bg_color={ bg_color }>
            <Content>{ content }</Content>
        </Container>
    )
}

Circle.propTypes = {
    content: PropTypes.any,
    onClick: PropTypes.func,
    bg_color: PropTypes.string
  }

export { Circle }