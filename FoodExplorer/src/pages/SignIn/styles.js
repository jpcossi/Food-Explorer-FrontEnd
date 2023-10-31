import styled from 'styled-components'
export const Container = styled.div`
  @media (min-width: 29em) {
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
  @media (max-width: 29.1em) {    
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.3rem;
    
    > svg{
      margin-top: 15.8rem;
      margin-right: 19px;
      width: 27.8rem;
      height: 4.4rem;
    } 
    
    .hidden{
      display: none;
    }
  }
`

export const Form = styled.form`
  @media (min-width: 29em) {    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    padding: 6.4rem;
    width: 47.6rem;
    height: 54.76rem;

    
    background-color: ${({theme}) => theme.COLORS.Dark_700};
    border-radius: 1.6rem;

    > h1{
      font-family: 'Poppins', sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.5rem;
      color: ${({theme}) => theme.COLORS.Light_100};
    }

    > .section1, .section2{
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
        border: 0.1rem solid ${({theme}) => theme.COLORS.Light_100};
        background: transparent;
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

  @media(max-width: 29.1em){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
  
    .section1, .section2{
      display: flex;
      flex-direction: column;
      gap: 0.8rem;      
      width: 28.8rem;
      
      h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        color: ${({theme}) => theme.COLORS.Light_400};
      }    
      
      :last-child{
        border: 0.1rem solid ${({theme}) => theme.COLORS.Light_100};
        background: transparent;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
      }
    }
    
    .button{
      width: 100%;
      height: 4.8rem;
    }
  }
`