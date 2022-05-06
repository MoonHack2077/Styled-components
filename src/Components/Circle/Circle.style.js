import styled from 'styled-components'
import { backgroundColor , textColor , gray } from '../../constants';

export const Container = styled.circle`
    display: flex;
    text-align: center;
    background-color: ${ gray };
    color: ${ textColor };
    border-radius: 50%;
    padding: 10px;
    user-select: none;

    &:hover{
        background-color: ${ textColor };
        & span{
            color: ${ backgroundColor };
        }
    }
`
export const Content = styled.span`
    font-size: 20px;
    color: ${ textColor };
`