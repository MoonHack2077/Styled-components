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
    // height: 50%;
    background-color: ${ primaryColor };
`
export const Search = styled.button`
    padding: 8px;
    color: ${ textColor };
    background-color: ${( { bg_color } ) => bg_color};
`
export const WeatherImages = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 30%;
    background-image: url(${ ({bg_img}) => bg_img });
    filter: grayscale(.5);
`
export const StateImg = styled.img`
    width: 100px;
    height: 100px;
    filter: grayScale(0); 
`
export const Details = styled.div`
    width: 100%;
    height: 70%;
    text-align: center;
`
export const StyledSpan = styled.span`
    /* color: ${ textColor }; */
    display: inline-block;
    margin: 20px 0;
    font-size: ${ ({ fz })=> fz }
`
export const StyledH2 = styled.h2`
    display: inline-block;
    margin: 0;
`
export const StyledH3 = styled.h3`
    display: inline-block;
    margin: 0;
`



export const Others = styled.section`
    width: 100%;
    outline: 1px solid red;
    /* height: 100%; */
    margin: 100px;
    background-color: #000
`