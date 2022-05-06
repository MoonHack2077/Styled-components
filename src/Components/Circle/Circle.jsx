import  React from 'react';
import { Container , Content } from './Circle.style.js';

function Circle({ content , onClick}){
    return(
        <Container onClick={ onClick } >
            <Content>{ content }</Content>
        </Container>
    )
}

export { Circle }