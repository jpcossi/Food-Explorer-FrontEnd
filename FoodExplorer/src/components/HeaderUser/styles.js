import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  @media (min-width: 27.375em){
    height: 10.4rem;
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.Dark_600};
    
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    .main {    
      margin: 0;
      width: inherit;
      
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      
      > .buttonMobile{
        display: none;
      }

      > .menu{
        display: none;
      }

      > .closeMenu{
        display: none;
      }

      > .logOut{
        display: none;
      }
    }
  }

  @media (max-width: 27.374em){
    height: 11.4rem;
    width: 100%;    
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({theme}) => theme.COLORS.Dark_600};

    .main{
      margin: 0;
      width: inherit;
      
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-evenly;

      > .button{
        display: none;
      }    

      > .inputHidden{
        display: none;
      }

      > .menu{
        svg{
          width: 2rem;
          height: 2rem;
        }
        cursor: pointer;
      }

      > .imageUser {
        svg{
          height: 2.6rem;
        }      
        margin-left: 3.85rem;
      }

      > .closeMenu {
        height: 3.4rem;
        display: flex;
        align-items: center;
        gap: 1.6rem;

        svg {
          width: 1.8rem;
          height: 1.8rem;
        }

        h2 {
          font-family: 'Roboto', sans-serif;
          font-size: 2.1163rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      > .close {
        cursor: pointer;
      }

      > .hidden{
        display: none;
      }

      > .logOut{
        width: 90%;
        margin-top: 1.6rem;
        
        > button {
          border: none;
          background: none;
          cursor: pointer;
          
          font-family: 'Poppins', sans-serif;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 300;
          line-height: 100%;
          color: ${({ theme }) => theme.COLORS.Light_300};
        }      
      }

      .break {
        width: 100%;
        flex-basis: 100%;
        height: 0;
      }
    }
  }
`

export const Button = styled.button`
  @media (min-width: 27.375em){  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;

    width: 21.6rem;
    color: ${({ theme }) => theme.COLORS.Light_100};
    background-color: ${({ theme }) => theme.COLORS.Tints_tomato_100};

    height: 5.6rem;
    border: 0rem;
    border-radius: 0.5rem;
    padding: 1.2rem, 3.2rem, 1.2rem, 3.2rem;

    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    &:disabled{
      opacity: 0.5;
    }

    > svg{
      width: 2.6rem;
      height: 2.2rem;   
    }    
  }

  @media (max-width: 27.374em){
    width: 2rem;
    height: 2rem;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.Light_100};

    > svg{
      width: 2rem;
      height: 2rem;   
    } 
  }  
`

export const Logout = styled.button`
  @media (min-width: 27.375em){
    border: none;
    background: none;
    cursor: pointer;

    > svg{
      width: 3.2rem;
      height: 3.2rem;
      color: ${({theme}) => theme.COLORS.Light_100}
    }
  }  

  @media (max-width: 27.374em){
    display: none
  }
`