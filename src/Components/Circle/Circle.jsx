import  React from 'react';
import { Container , Content } from './Circle.style.js';

function Circle({ content , onClick , bg_color}){
    return(
        <Container onClick={ onClick } bg_color={ bg_color }>
            <Content>{ content }</Content>
        </Container>
    )
}

export { Circle }