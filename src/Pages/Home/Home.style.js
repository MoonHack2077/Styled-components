import styled from 'styled-components';
import { primaryColor , backgroundColor, textColor } from '../../constants.js';

//MOBILE FIRST

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    width: 100vw;
    height: 100vh;
    background-color: ${ backgroundColor };
    color: ${ textColor }
`;

export const City = styled.aside`
    width: 100%;
    height: 50%;
    background-color: ${ primaryColor }
`

export const Others = styled.section`
    width: 100%;
    outline: 1px solid red;
    /* height: 100%; */
    margin: 100px;
    background-color: #000
`