import  React from 'react';
import { Container , Content } from './Circle.style.js';

function Circle({ content , switchTemp , bg_color}){
    return(
        <Container onClick={ switchTemp } bg_color={ bg_color }>
            <Content>{ content }</Content>
        </Container>
    )
}

export { Circle }