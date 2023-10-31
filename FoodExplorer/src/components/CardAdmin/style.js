import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 27.375em){
    width: 30.4rem;
    height: 46.2rem;
    border-radius: 0.8rem;
    padding: 1.6rem;

    border: 0.1rem solid ${({theme}) => theme.COLORS.Dark_300};
    background-color: ${({theme}) => theme.COLORS.Dark_200};

    
    .edit {
      display: flex;
      justify-content: flex-end;
      width: 27.2rem;    
    }

    .link {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      
      .image{
        width: 17.6rem;
        height: 17.6rem;
      }

      > h2{
        font-family: 'Poppins', sans-serif;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.4rem;
        text-align: center;    
        color: ${({theme}) => theme.COLORS.Light_300};
      }
      
      > p{    
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.2rem;
        text-align: center;
        color: ${({theme}) => theme.COLORS.Light_400};
        
      }    
      
      > h3{
        font-family: 'Roboto', sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 5.1rem;
        text-align: center;
        
        color: ${({theme}) => theme.COLORS.Tints_cake_200};
      }
    }
  }

  @media (max-width: 27.374em){
    width: 21rem;
    height: 29.2rem;
    border-radius: 0.8rem;
    padding: 1.6rem;

    border: 0.1rem solid ${({theme}) => theme.COLORS.Dark_300};
    background-color: ${({theme}) => theme.COLORS.Dark_200};

    
    .edit {
      display: flex;
      justify-content: flex-end;
      width: 17.5rem;    

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    .link {      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      
      .image{
        margin-top: 1.5rem;
        width: 8.8rem;
        height: 8.8rem;
      }

      > h2{
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        letter-spacing: 0em;
        text-align: center;
        color: ${({theme}) => theme.COLORS.Light_300};
      }
      
      > p{    
        display: none;        
      }    
      
      > h3{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        letter-spacing: 0em;
        text-align: center;
      
      color: ${({theme}) => theme.COLORS.Tints_cake_200};
      }
    }
  }
`