import styled from "styled-components";

export const Container = styled.footer` 
   @media (min-width: 27.375em){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 12.3rem;
    margin-top: 4.672rem;    
    
    width: 100%;
    height: 7rem; 
    
    position: absolute;
    bottom: 0;
    
    background-color: ${({theme}) => theme.COLORS.Dark_600};
    
    > p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.2rem;
      color: ${({theme}) => theme.COLORS.Light_200};
    }
  }  

  @media (max-width: 27.374em){
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2.4rem 12.3rem;
    margin-top: 4.672rem;
    
    width: 100%;
    height: 3rem; 

    position: absolute;
    bottom: 0;
    
    background-color: ${({theme}) => theme.COLORS.Dark_600};
    
    .logan{
      height: 18.336px;
      width: 142.473px;
      margin-left: -10rem;
    }

    p {
      width: 26.2rem;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: normal;
      color: ${({theme}) => theme.COLORS.Light_200};
    }
  }  
`