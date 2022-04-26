import styled from 'styled-components'
import { primaryColor , textColor } from '../../constants.js';

export const Container = styled.div`
    width: 500px;
    /* height: 300px; */
    padding: 10px 30px;
    text-align: center;
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