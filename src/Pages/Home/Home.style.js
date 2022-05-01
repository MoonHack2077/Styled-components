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
        display: flex;
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
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    padding-top: 20px;
    /* padding-left: 40px; */
    /* background-color: ${ primaryColor }; */
    background-color: red;
    z-index: 1000;
`
export const SearchForm = styled.form`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 20px 10px;
    background-color: #000;
`
export const SearchInput = styled.input`
    width: 300px;
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

    &.toggleButton{
        position: fixed;
        top: ${ ({ top }) => top };
        left: ${ ({ left }) => left };
        right: ${ ({ right }) => right };
        bottom: ${ ({ bottom }) => bottom };
    }

    &.inputForm{
        margin-left: 20px;
    }
`
export const RecentSearches = styled.ul`
    width: 100%;
    // height: auto; must be this
    height: 300px;
    margin: 0;
    background-color: blue;
`
export const Searched = styled.li`
    width: 100%;

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
    align-items: center;
    flex-direction: column;
    padding: 40px;
    gap: 20px;

    @media screen and (min-width: 1000px){
        min-height: 100%;
        padding: 0;
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
        justify-content: space-beetwen;
        gap: 0;
        padding: 0;
    }
`
export const StatusContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 20px;
    height: 50%;

    @media screen and (min-width: 1000px){
        justify-content: space-beetwen;
        gap: 0;
        padding: 0;
    }
`

export const Footer = styled.footer`
    text-align: center;
`