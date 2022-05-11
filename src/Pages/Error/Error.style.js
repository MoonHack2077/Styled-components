import styled from 'styled-components';
import { primaryColor , backgroundColor, textColor } from '../../constants.js';

export const Container = styled.section`
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${ backgroundColor };
`
export const Img = styled.img`
    width: 500px;
    height: 500px;
`
