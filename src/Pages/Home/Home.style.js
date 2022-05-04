import styled from 'styled-components';
import { primaryColor , backgroundColor, textColor } from '../../constants.js';

export const Main = styled.main`
    display: flex; 
    flex-direction: column;
    align-items: center;
    /* min-width: 100vw; */
    /* justify-content: center; */
    /* width: 100%; */
    background-color: ${ backgroundColor };
    color: ${ textColor };

    @media screen and (min-width: 1000px){
        flex-direction: row;
    }
`;

export const City = styled.aside`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 200px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    background-color: ${ primaryColor };

    @media screen and (min-width: 1000px){
        height: 100vh;
        padding: 0;
        gap: 0;
        justify-content: space-evenly;
        width: 35%;
    }
`
export const SearchCity = styled.aside`

    @keyframes appear{
        from{ transform: translateX(-2000px) }
        to{ transform: translateX(0) }
    }

    padding: 0 40px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: ${ primaryColor };
    z-index: 1000;
    animation: appear 1s ease-in-out forwards;

    @media screen and (min-width: 1000px){
        position: absolute;
        padding: 0 20px;
    }
`
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    /* width: 100%; */
    padding: 20px 0;
    margin-top: 30px;
    margin-left: 30px;
    /* background-color: #000; */
`
export const SearchInput = styled.input`
    width: 250px;
    padding: 8px;
    outline: 1px solid ${ textColor };
    color: ${ textColor };
    background-color: transparent;

    &::placeholder{
        color: ${ textColor };
    }
`
export const SearchButton = styled.input`
    border: none;
    outline: none;
    z-index: 200;
    padding: 8px;
    color: ${ textColor };
    background-color: ${( { bg_color } ) => bg_color};
    
    &:hover{
        background-color: ${( { bg_color_h } ) => bg_color_h};;
    }

    &.toggleButton{
        position: fixed;
        font-size: ${ ({ fz })=> fz };
        top: ${ ({ top }) => top };
        left: ${ ({ left }) => left };
        right: ${ ({ right }) => right };
        bottom: ${ ({ bottom }) => bottom };
    }

    &.inputForm{
        margin-left: 20px;
    }

    @media screen and (min-width: 1000px){
        &.toggleButton{
            position: absolute;
        }
    }
`
export const RecentSearches = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* height: auto; */
    width: 80%;
    margin: 0;
`
export const Searched = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    // width: 100%;
    list-style-type: none;
    height: 60px;
    &.arrow{
        display: none;
    }

    &:hover{
        outline: 1px solid ${ textColor };  
        &.arrow{
            display: inline;
        }
    }
`

export const WeatherImages = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    /* width: 100%; */
    /* height: 100%; */
    filter: grayscale(1); 

    @media screen and (min-width: 1000px){
        width: 100%;
    }
`
export const BackImg = styled.img`
    position: absolute;
    height: 100%;
    filter: opacity(0.1); 
    transform: scale(2.5);

    @media screen and (min-width: 1000px){
        width: 100%;
        transform: scale(1.1);
    }
`
export const StateImg = styled.img`
    width: 200px;
    height: 200px;
`
export const Details = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    text-align: center;
`
export const Span = styled.span`
    display: inline-block;
    margin: 20px 0;
    font-size: ${ ({ fz })=> fz };

    &.username{
        font-weight: bold;
    }
    &.indicator{
        text-align: start;
    }
`
export const ContainerSpan = styled.div`
    @media screen and (min-width: 1000px){
        text-align: left;
    }
`

export const StyledH2 = styled.h2`
    display: inline-block;
    margin: 0;
`
export const StyledH3 = styled.h3`
    display: inline-block;
    margin: 0;
`



export const Stats = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 40px;
    gap: 20px;

    @media screen and (min-width: 1000px){
        max-height: 100vh;
        padding: 0;
        justify-content: space-between;
        gap: 0;
    }
`
export const Days = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 30px;
    height: 50%;

    @media screen and (min-width: 1000px){
        /* justify-content: center; */
        /* gap: 40px; */
        padding: 0 20px;
        margin-top: 20px;
    }
`
export const StatusContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 20px;
    // height: 50%;

    @media screen and (min-width: 1000px){
        justify-content: space-beetwen;
        gap: 0;
        padding: 0 20px;
    }
`
export const HighLights = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Footer = styled.footer`
    text-align: center;
`