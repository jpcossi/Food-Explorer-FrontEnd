import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    height: 48px;
    width: 100%;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.Dark_800};

    > input {        
        width: 100%;
        border: 0;
        background: transparent;
        color: ${({theme}) => theme.COLORS.Light_500};
        padding: 16px 14px;
        
        &:placeholder{
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
        }
 }
`