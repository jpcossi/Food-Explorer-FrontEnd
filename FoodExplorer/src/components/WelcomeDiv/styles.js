import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 27.375em){    
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 115rem;
    height: 26rem;
    margin-top: 17.2rem;
    
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 0.8rem;

    > svg{
      max-width: 63.3rem;
      margin-bottom: 14.7rem;
    }
    
    > .hidden{
      //display: none;
    }
    
    > .text{
      max-width: 42.139rem;
      height: 7.2rem;
      
      > p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        
        color: ${({theme}) => theme.COLORS.Light_300}; 
      }
      
      > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 4rem;
        line-height: 5.6rem;
        letter-spacing: 0rem;
        
        color: ${({theme}) => theme.COLORS.Light_300};
      }
    }  
  }

  @media (max-width: 27.374em){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    position: relative;

    width: 37.6rem;
    height: 12rem;
    margin-top: 4.4rem;
    
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 0.8rem;

    > svg{
      width: 19.1rem;
      height: 14.9rem;
    }
    

    > .fruit{
      right: 17.18rem;
      //bottom: 20.7rem;

      width: 19.1rem;
      height: 14.9rem;
      opacity: 0.8;
    }
    
    > .text{
      width: 21.5rem;
      height: 6.1rem;

      margin-top: 1.5rem;
      
      > p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 16.8px */
        
        color: ${({theme}) => theme.COLORS.Light_300}; 
      }
      
      > h1 {        
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.52rem;
        letter-spacing: 0rem;
        
        color: ${({theme}) => theme.COLORS.Light_300};
      }
    }
  }
` 