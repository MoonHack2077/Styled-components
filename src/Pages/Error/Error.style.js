import styled from 'styled-components';
import { primaryColor , backgroundColor, textColor } from '../../constants.js';

export const Container = styled.section`

    @keyframes flash {
        0%{ filter: brightness(20%); }
        50%{ filter: brightness(50%) }
        100%{ filter: brightness(100%) }
    }

    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${ backgroundColor };
    animation: flash 3.8s ease forwards;
    overflow: hidden;
`

export const Img = styled.img`
    @keyframes first {
        from{ left: 0; bottom: 0; transform: rotate(0deg); filter: brightness(100%) }  
        to{ left: 100%; bottom:100%; transform: rotate(360deg); filter: brightness(40%) }
    }

    @keyframes second {
        from{ right: 0; top:0; transform: rotate(360deg); filter: brightness(100%) }
        to{ right: 100%; top:100%; transform: rotate(0deg); filter: brightness(70%) }
    }

    position: absolute;
    width: 250px;
    height: 250px;

    &.earth{
        position: relative;
        filter: drop-shadow(-20px 12px 5px #000);
    }

    &.first{
        animation: first 8.6s linear infinite alternate;
    }
    &.second{
        animation: second 8.6s ease infinite alternate;
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    z-index: 2;
    align-items: center;
    outline: 2px solid ${textColor};
    filter: brightness(100%);
    border-radius: 30px;
    max-width: 700px;
    background-color: ${primaryColor};
    padding: 30px;
    margin: 0 20px;
`
export const P = styled.p`
    margin: 0;
    color: ${textColor};
`