import styled from '@emotion/styled'
import { theme } from "@constant/theme"

export const BulidingButton = styled.button`
    background: ${theme.colors.greyscale.light3};
    color: ${theme.colors.greyscale.dark2};
    border: ${theme.colors.greyscale.dark3} 1px solid;
    width: 200px;
    height: 50px;
    border-radius: 12px;
    margin: 20px;
    &:hover{  
    background-color : ${theme.colors.greyscale.light1};
    };
    &.selected::after{
        background: ${theme.colors.greyscale.point};
        color: ${theme.colors.greyscale.light3};
    }
`


export const CrackButton = styled.button`
    background: ${theme.colors.greyscale.light3};
    color: ${theme.colors.greyscale.dark2};
    border: ${theme.colors.greyscale.dark3} 1px solid;
    width: 200px;
    height: 50px;
    border-radius: 12px;
    margin: 20px;
    &:hover{  
    background-color : ${theme.colors.greyscale.light1};
    };
    &.selected::after{
        background: ${theme.colors.greyscale.pointLight};
        color: ${theme.colors.greyscale.light3};
    }
`