import  React from 'react';
import { Container , Content } from './Circle.style.js';

function Circle({ content }){
    return(
        <Container>
            <Content>{ content }</Content>
        </Container>
    )
}

export { Circle }