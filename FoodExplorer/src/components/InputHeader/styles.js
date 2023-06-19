import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    height: 48px;
    width: 581px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.Dark_900};

    > input {  
        width: 220px;
        border: 0;
        background: transparent;
        color: ${({theme}) => theme.COLORS.Light_500};
        
        &:placeholder{
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          color: ${({theme}) => theme.COLORS.Light_500}
        }
 }
`