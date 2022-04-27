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
    outline: 1px solid red;
    background-color: ${ primaryColor };
    color: ${ textColor }
`
export const StateImg = styled.img`
    width: 90px;
    height: 90px;
`
export const Span = styled.span`
    font-size: 20px;
    margin: 10px;

    &.maxTemp{
        font-weight: bold;
        font-size: 22px;
    }
`
