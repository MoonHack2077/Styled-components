import styled from 'styled-components';
import { backgroundColor , textColor } from '../../constants.js';

export const Container = styled.section`
    display: grid;
    place-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: ${ backgroundColor };
    color: ${ textColor };

    & .tornado{
        font-size: 500px;
        animation-name: loop;
        animation-duration: 600ms;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    @keyframes loop{
        0%{ transform: rotateY( 180deg ) }
        50%{ transform: rotateX( 180deg ) }
        75%{ transform: rotateY( 180deg ) }
    }
`