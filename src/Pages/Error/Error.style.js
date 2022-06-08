import styled from 'styled-components';
import { primaryColor , backgroundColor, textColor } from '../../constants.js';

export const Container = styled.section`

    @keyframes fogonazo {
        0%{ filter: brightness(20%); }
        50%{ filter: brightness(50%) }
        100%{ filter: brightness(100%) }
    }

    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${ backgroundColor };
    animation: fogonazo 3.8s ease forwards;
    overflow: hidden;
`

//const randomNum = Math.floor(Math.random()*1001);

export const Img = styled.img`
    @keyframes first {
        from{ transform: translate(-2000px) rotate(90deg); filter: brightness(100%) }
        to{ transform: translate(2000px) rotate(360deg); filter: brightness(70%) }
    }

    @keyframes second {
        from{ transform: translate(2000px) rotate(360deg); filter: brightness(100%) }
        to{  transform: translate(-2000px) rotate(90deg); filter: brightness(70%) }
    }

    position: absolute;
    width: 250px;
    height: 250px;

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
    gap: 10px;
    outline: 2px solid ${textColor};
    filter: brightness(100%);
    border-radius: 30px;
    max-width: 700px;
    //height: 300px;
    padding: 30px;
    color: ${textColor};
`
export const P = styled.p`
    margin: 0;
`
export const List = styled.ul`
    outline: 2px solid blue;
    //width: 100%;
    //height: auto;
`
export const City = styled.li`
    outline: 1px solid green;
    width: 100%;
    height: 50px;
`