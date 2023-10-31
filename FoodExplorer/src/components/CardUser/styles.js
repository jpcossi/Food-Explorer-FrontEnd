import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 27.375em){
    width: 30.4rem;
    height: 46.2rem;
    border-radius: 0.8rem;
    padding: 2.4rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    border: 0.1rem solid ${({theme}) => theme.COLORS.Dark_300};
    background-color: ${({theme}) => theme.COLORS.Dark_200};

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }
    
    .lastChild{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.6rem;

      > .button {
        border: none;
        border-radius: 0.5rem;
        padding: 1.2rem 2.4rem 1.2rem 2.4rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        text-align: center;
        
        color: ${({theme}) => theme.COLORS.Light_100};
        background-color: ${({theme}) => theme.COLORS.Tints_tomato_100};
      }
      
      > .divCount{
        display: flex;
        flex-direction: row;
        gap: 1.4rem;
        
        .buttonPlus{
          padding: 0rem;
          background: transparent; 
          margin-top: 0.4rem;
          
          > svg{
            width: 2.4rem;
            height:2.4rem;
          }      
        }
        
        .buttonMinus{
          padding:0rem;
          background: transparent;         
          margin-top: 0.4rem;
          
          > svg{
            width: 2.4rem;
            height:2.4rem;
          }  
        }
        
        h4{
          font-family: 'Roboto', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          line-height: 3.2rem;
          color: ${({theme}) => theme.COLORS.Light_300};
        }
      }    
    }
    
    .image{
      height: 17.6rem;
      width: 17.6rem;
    }
    
    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.4rem;
      letter-spacing: 0em;
      text-align: center;
      color: ${({theme}) => theme.COLORS.Light_300};
    }

    p {    
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.2rem;
      letter-spacing: 0em;
      text-align: center;
      color: ${({theme}) => theme.COLORS.Light_400};
      
    }
    
    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 5.1rem;
      letter-spacing: 0em;
      text-align: center;
      
      color: ${({theme}) => theme.COLORS.Tints_cake_200};
    }
  }
  
  @media (max-width: 27.374em){
    width: 21rem;
    height: 29.2rem;
    border-radius: 0.8rem;
    padding: 2.4rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    border: 0.1rem solid ${({theme}) => theme.COLORS.Dark_300};
    background-color: ${({theme}) => theme.COLORS.Dark_200};

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
    }
    
    .lastChild{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.4rem;
      
      > .divCount{
        display: flex;
        flex-direction: row;
        gap: 1.4rem;
        
        .buttonPlus{
          padding: 0rem;
          background: transparent;
          
          > svg{
            width: 24px;
            height:24px;
          }      
        }
        
        .buttonMinus{
          padding:0rem;
          background: transparent;         
          margin-top: 0.4rem;
          
          > svg{
            width: 2.4rem;
            height:2.4rem;
          }  
        }
        
        h4{
          margin-top: 0.8rem;

          font-family: 'Roboto', sans-serif;
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 1.6rem;
          color: ${({theme}) => theme.COLORS.Light_300};
        }
      }

      .button {
        width: 16.2rem;
        border: none;
        border-radius: 0.5rem;
        padding: 1.2rem 2.4rem 1.2rem 2.4rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        text-align: center;
        
        color: ${({theme}) => theme.COLORS.Light_100};
        background-color: ${({theme}) => theme.COLORS.Tints_tomato_100};
      }
    }
    
    .image{
      height: 8.8rem;
      width: 8.8rem;
    }
    
    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
      letter-spacing: 0em;
      text-align: center;
      color: ${({theme}) => theme.COLORS.Light_300};
    }

    p {    
      display: none;      
    }
    
    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.6rem;
      letter-spacing: 0em;
      text-align: center;
      
      color: ${({theme}) => theme.COLORS.Tints_cake_200};
    }
  }  
` 