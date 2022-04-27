import styled from 'styled-components'
import { primaryColor , textColor } from '../../constants.js';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-grow: 1; */
    justify-content: space-around;
    align-items: center;
    min-width: 300px;
    min-height: 200px;
    padding: 20px 30px;
    /* outline: 1px solid blue; */
    /* text-align: center; */
    border-radius: 30px;
    background-color: ${ primaryColor };
`
export const Type = styled.h2`
    display: inline-block;
    margin: 0;
    color: ${ textColor }
`
export const Data = styled.p`
    margin: 0;
    color: ${ textColor };
`
export const DataNumber = styled.span`
    font-size: 25px;
    color: ${ textColor };
`