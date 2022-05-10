import styled from 'styled-components';
import { backgroundColor , textColor , gray } from '../../constants.js';

export const Container = styled.section`
    @keyframes rotate{
        from{ transform: rotate( 0deg ) }
        to{ transform: rotate( 360deg ) }
    }
    @keyframes rotate2{
        from{ transform: rotate( 90deg ) }
        to{ transform: rotate( 0deg ) }
    }

    display: grid;
    place-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: ${ backgroundColor };

    & .spinner{
        position: absolute;
        animation-duration: 1.6s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.075, 1, 0.165, 1);
    }

    & .white{ 
        font-size: 200px; 
        color: ${ textColor };    
        animation-name: rotate;
    }

    & .gray{ 
        color: ${ gray };
        font-size: 215px;     
        animation-name: rotate2;
    }
`;