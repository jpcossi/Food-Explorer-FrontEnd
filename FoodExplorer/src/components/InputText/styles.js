import styled from "styled-components"

export const Container = styled.div`
  @media(min-width: 28.8em){
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 4.8rem;
    width: 100%;
    border-radius: 0.8rem;
    background-color: ${({theme}) => theme.COLORS.Dark_800};
    
    input {        
      width: 100%;
      border: 0;
      background: transparent;
      color: ${({theme}) => theme.COLORS.Light_500};
      padding: 1.6rem 1.4rem;
      
      &:placeholder{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
      }
    }
  }
  
  @media(max-width: 28.75em){
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 4.8rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    border-radius: 0.8rem;
    background-color: ${({theme}) => theme.COLORS.Dark_900};

    input {        
      width: 100%;
      height: 2.4rem;
      border: 0;
      background: transparent;
      color: ${({theme}) => theme.COLORS.Light_500};
      
      &:placeholder{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
      }
    }
  }
`