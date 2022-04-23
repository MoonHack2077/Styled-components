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
    color: ${ textColor };
`;

export const City = styled.aside`
    position: relative;
    width: 100%;
    height: 50%;
    background-color: ${ primaryColor };
`
export const Search = styled.button`
    padding: 8px;
    color: ${ textColor };
    background-color: ${( { bg_color } ) => bg_color};
`
export const BackgroundImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    /* z-index: 1000; */
    opacity: .5;
    /* transform: scale(.9); */
    /* filter: grayScale(.5); */
`

export const Others = styled.section`
    width: 100%;
    outline: 1px solid red;
    /* height: 100%; */
    margin: 100px;
    background-color: #000
`