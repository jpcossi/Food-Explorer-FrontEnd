import styled from "styled-components";

export const Container = styled.span`
  @media (min-width: 27.375em){    
    display: flex;
    gap: 0.5rem;
    flex-direction: row;  
    
    .tag{
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;

      padding: 0.4rem 0.8rem;
      margin-right: 0.8rem;
      border-radius: 0.5rem;
      
      background-color:  ${({theme}) => theme.COLORS.Dark_1000};
      color:  ${({theme}) => theme.COLORS.Light_100};
    }
  } 

  @media (max-width: 27.374em){    
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    flex-direction: row;  
    
    .tag{
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 2.0rem;
      
      padding: 0.4rem 0.8rem;
      margin-right: 0.8rem;
      border-radius: 0.5rem;
      
      background-color:  ${({theme}) => theme.COLORS.Dark_1000};
      color:  ${({theme}) => theme.COLORS.Light_100};
    } 
  }
`