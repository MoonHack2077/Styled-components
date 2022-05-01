import styled from 'styled-components';
import { primaryColor , textColor } from '../../constants.js';

export const Container = styled.div`
    display: grid;
    place-items: center;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // width: 200px;
    // height: 350px;
    margin: 0 10px 10px 0; 
    padding: 10px;
    gap: 10px;
    background-color: ${ primaryColor };
    color: ${ textColor };

    @media screen and (min-width: 700px){
        padding: 5px;
    }
`
export const StateImg = styled.img`
    width: 90px;
    height: 90px;

    @media screen and (min-width: 700px){
        width: 75px;
        height: 75px;
    }
`
export const Span = styled.span`
    font-size: 20px;
    margin: 10px;

    &.maxTemp{
        font-weight: bold;
        font-size: 22px;
    }
`
