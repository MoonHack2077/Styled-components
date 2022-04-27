import styled from 'styled-components';
import { primaryColor , backgroundColor, textColor } from '../../constants.js';

export const Main = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${ backgroundColor };
    color: ${ textColor };
`;

export const City = styled.aside`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* height: 80%; */
    padding: 20px;
    background-color: ${ primaryColor };
`
export const SearchCity = styled.aside`
    position: absolute;
    width: 100%;
    // height: 50%;
    padding: 20px;
    background-color: ${ primaryColor };
`
export const SearchForm = styled.form`
    display: flex;
    width: 100%;
    // padding: 8px;
    background-color: #000;
`
export const SearchInput = styled.input`
    width: 300px;
    padding: 8px;
    outline: 1px solid ${ textColor };
    color: ${ textColor };
    background-color: transparent;
`
export const SearchButton = styled.input`
    padding: 8px;
    color: ${ textColor };
    background-color: ${( { bg_color } ) => bg_color};

    &.toggleButton{
        position: absolute;
        top: 20px;
        left: 20px;
    }

    // &.inputForm{

    // }
`
export const RecentSearches = styled.ul`
    width: 100%;
    margin: 0;
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
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: grayscale(1); 
`
export const BackImg = styled.img`
    position: absolute;
    height: 100%;
    filter: opacity(0.1); 
    transform: scale(2.5);
`
export const StateImg = styled.img`
    width: 200px;
    height: 200px;
`
export const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`
export const Span = styled.span`
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



export const Stats = styled.section`
    width: 100%;
    display: grid;
    place-items: center;
    padding: 0 40px;
    gap: 20px;
    min-height: 100%;
    margin: 0 100px;
`
export const Days = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 30px;
    width: 100%;
    height: 50%;
`
export const StatusContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    padding: 20px 20px;
    width: 100%;
    height: 50%;
`