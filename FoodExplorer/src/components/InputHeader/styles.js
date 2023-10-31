import styled from "styled-components"

export const Container = styled.div`
  @media (min-width: 27.375em){
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
  
    height: 4.8rem;
    width: 58.1rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.COLORS.Dark_900};
  
    input {  
      width: 25.3rem;
      border: 0;
      background: transparent;
      color: ${({theme}) => theme.COLORS.Light_500};               
        
      &:placeholder{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        color: ${({theme}) => theme.COLORS.Light_500}  
      }
    }
  }

  @media (max-width: 27.374em){
    > .hidden{
      display: none;
    }
      
    display: flex;
    align-items: center;
    justify-content: center;
      
    width: 28rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.COLORS.Dark_900};
    

    input {  
      width: 25.3rem;
      border: 0;
      background: transparent;
      color: ${({theme}) => theme.COLORS.Light_500};               
        
      &:placeholder{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        color: ${({theme}) => theme.COLORS.Light_500}  
      }
    }    
  }
`