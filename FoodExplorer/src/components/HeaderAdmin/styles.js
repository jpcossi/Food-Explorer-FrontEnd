import styled from 'styled-components'

export const Container = styled.header`
  @media (min-width: 27.375em){    
    grid-area: header;

    height: 10.4rem;
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.Dark_600};
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    .main{
      margin: 0;
      width: inherit;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      .section1, .section2{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 21rem;
      }

      .section1 .closeMenu{
        display: none;
      }

      .section1 .menu{
        display: none;
      } 
      
      .section2 .newDish{
        display: none;
      } 
      
      .section2 .logOut{
        display: none;
      } 
    }
  }

  @media (max-width: 27.374em){    
    grid-area: header;

    height: 10.4rem;
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.Dark_600};
    
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .main{
      margin: 0;
      width: inherit;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      
      .section1{
        gap: 10rem;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .section2{
        display: flex;
        flex-direction: column;
        align-items: center;
      }


      .section1 .menu{
        svg{
          width: 2.4rem;
          height: 1.8rem;
        }
      }

      .section1 .imageAdmin{
        margin-top: 11px;
      }
      
      .hidden{
        display: none;
      }    

    }

    > .menuSearch{
      margin: 0;
      width: inherit;

      display: flex;
      flex-direction: column;
      justify-content: center;

      .section1, .section2{
        width: 100%;
      }

      .section1{
        padding: 5rem 2.8rem;
        .closeMenu{
          display: flex; 
          align-items: center;
          flex-direction: row;
          justify-content: flex-start;
          gap: 1.6rem;
        }
      }
      
      .section2{
        padding: 0 2.8rem;
        display: flex; 
        align-items: flex-start;       
        
        .inputHeader{
          width: 100%;
        }
        
        .newDish{
          width: 100%;
          padding: 1rem;
          border-bottom: 1px solid ${({theme}) => theme.COLORS.Dark_1000};
          
          button{
            border: none;
            background: transparent;
            font-size: 2.2rem;
            font-weight: 300;
            line-height: 140%;
            font-style: normal;
            font-family: 'Poppins', sans-serif;
            color: ${({theme}) => theme.COLORS.Light_300};
          }
        }

        .newDish:hover{
          color: ${({theme}) => theme.COLORS.Light_400};
        }

        .logOut{
          width: 100%;
          padding: 1rem;
          border-bottom: 1px solid ${({theme}) => theme.COLORS.Dark_1000};
          
          button{
            border: none;
            background: transparent;
            font-size: 2.4rem;
            font-weight: 300;
            line-height: 140%;
            font-style: normal;
            font-family: 'Poppins', sans-serif;
            color: ${({theme}) => theme.COLORS.Light_300};
          }
        }

        .logOut:hover{
          color: ${({theme}) => theme.COLORS.Light_400};
        }
      }
    }
  }
`

export const Button = styled.button`
  @media (min-width: 27.375em){ 
    width: 21.6rem;
    background-color: ${({ theme }) => theme.COLORS.Tints_tomato_100};
    color: ${({ theme }) => theme.COLORS.Light_100};
  
    height: 5.6rem;
    border: 0rem;
    border-radius: 0.5rem;
    padding: 1.2rem 3.2rem 1.2rem 3.2rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  
    &:disabled{
      opacity: 0.5;
    }
  }

  @media (max-width: 27.374em){  
    display: none;
  }
`

export const Logout = styled.button`
  @media (min-width: 27.374em){
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
    display: none;
  }

  
`

