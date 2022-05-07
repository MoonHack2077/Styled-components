import styled from 'styled-components'
import { backgroundColor , textColor } from '../../constants';

export const Container = styled.div`
    display: flex;
    text-align: center;
    background-color: ${ ({ bg_color }) => bg_color };
    color: ${ ({ bg_color }) => bg_color===textColor ? backgroundColor : textColor };
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
    /* color: ${ textColor }; */
`