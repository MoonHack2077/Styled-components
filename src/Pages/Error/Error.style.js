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

const randomNum = () => Math.floor(Math.random()*1001);

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
    background-color: ${primaryColor};
    padding: 30px;
    margin: 0 20px;
    color: ${textColor};
`
export const P = styled.p`
    margin: 0;
`
export const List = styled.ul`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`
export const City = styled.li`
    display: grid;
    place-items: center;
    list-style-type: none;

    &:hover{
        background-color: ${textColor};
        color: ${backgroundColor};
        cursor: pointer;
    }
    width: 100px;
    height: 50px;
`