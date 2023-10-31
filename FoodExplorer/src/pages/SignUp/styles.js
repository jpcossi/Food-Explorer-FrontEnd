import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 36.375em) {    
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.3rem;
    
    svg{
      margin-top: 15.8rem;
      margin-right: 19px;
      width: 27.8rem;
      height: 4.4rem;
    } 
    
    .hidden{
      display: none;
    }
  }

  @media (min-width: 36.376em){
    width: 100%;
    height: 100vh;
  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  
    > svg{
      width: 32.4rem;
      height: 4.8rem;
    }
  }  
`

export const Form = styled.form`
  @media(min-width: 583px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    padding: 6.4rem;
    width: 47.6rem;
    height: 62.1rem;  
  
    background-color: ${({theme}) => theme.COLORS.Dark_700};
    border-radius: 1.6rem;
  
    > h1{
      font-family: 'Poppins', sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.5rem;
      color: ${({theme}) => theme.COLORS.Light_100};
    }
  
    > .section1, .section2, .section3{
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      width: 100%;
  
      > h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        color: ${({theme}) => theme.COLORS.Light_400};
      }    
  
      > :last-child{      
        background: ${({theme}) => theme.COLORS.Dark_900};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
      }
    }
  
    > .button{
      width: 100%;
      height: 4.8rem;
    }    
  }

  @media(max-width: 582px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    width: 28.8rem;

    > .section1, .section2, .section3{
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      width: 100%;
  
      > h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        color: ${({theme}) => theme.COLORS.Light_400};
      }    
  
      > :last-child{      
        background: ${({theme}) => theme.COLORS.Dark_900};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
      }
    }
  
    > .button{
      width: 100%;
      height: 4.8rem;
    }
  }
`