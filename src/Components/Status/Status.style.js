import styled from 'styled-components'
import { primaryColor , textColor } from '../../constants.js';

export const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center; */
    text-align: center;
    min-width: 300px;
    min-height: 200px;
    padding: 20px 30px;
    margin: 10px;
    /* outline: 1px solid blue; */
    /* text-align: center; */
    background-color: ${ primaryColor };

    @media screen and (min-width: 1000px){
        min-width: 340px;
        min-height: 150px;
        padding: 20px 30px;
    }
`
export const Type = styled.h2`
    display: inline-block;
    font-weight: bolder;
    font-size: 30px;
    margin: 0 0 30px 0;
    color: ${ textColor }
`
export const Data = styled.p`
    margin: 0;
    color: ${ textColor };
    text-align: center;
`
export const DataNumber = styled.span`
    font-size: 20px;
    color: ${ textColor };
    margin-right: 5px;
`