import styled from 'styled-components'
import {darken} from 'polished'

export const Container = styled.div` 
    margin-top:20px;
    font-size:20px;
    h1{
        font-family: 'Lobster', cursive;
        color: #000000;
        padding:10px;
        font-weight: normal;
    }

    ul,li{
        margin-top:10px;
    }
    input{
        border-radius: 5px;
        height:30px;
    }
`
export const MyButton = styled.button`
    border-radius: 5px;
    background: ${(props) => props.color};
    color: #fff;
    border: none;
    margin-left:10px;
    height: 30px;
    align-items: center;
    padding: 0 10px;;
    transition: ease-out .2s;
    &:hover {
        background: ${props => darken(0.1, props.color)};
    }
`