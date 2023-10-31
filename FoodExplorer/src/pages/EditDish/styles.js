import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 27.375em){
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.Dark_400};

    > footer{
      margin-top: 12.4rem;
    }

    .first {
      min-height: 100vh;
      position: relative;
    }

    .first .body-content {
      padding-bottom: 9rem;
    }
    
    .search {
      min-height: 100vh;
      position: relative;
    }

    .search .body-content{
      padding-bottom: 14rem;
    }
    
    .search h1{
      font-size: 2.4rem;
    }

    .search .dishSearch{
      width: 90rem;
      margin: auto;
      margin-top: 5rem;

      .dish{
        margin-top: 2.3rem;
      }
    } 
  }

  @media (max-width: 27.374em){
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.Dark_400};

    > footer{
      margin-top: 12.4rem;
    }

    .hide{
      display: none;
    }

    .first {
      min-height: 100vh;
      position: relative;
    }

    .first .body-content {
      padding-bottom: 9rem;
    }
    
    .search {
      min-height: 100vh;
      position: relative;
    }

    .search .body-content{
      padding-bottom: 9rem;
    }

    .search .body-content h1{
      font-size: 1.8rem;      
    }
    
    .search .body-content .dishSearch{
      width: 41rem;
      margin: auto;
      margin-top: 22rem;
    
      .dish{
        margin-top: 2.3rem;
      }
    }
  }  
`

export const Form = styled.form`
  @media (min-width: 27.375em){
    margin: 0 auto;
    max-width: 112rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
      
    > :first-child{
      margin-top: 4rem;
    }

    > h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.5rem;
      color: ${({theme}) => theme.COLORS.Light_300};
    }
    
    > .hero {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3.2rem;
      
      > :last-child{
        align-self: flex-end;
      }
      
      > .section1, .section2, .section3 {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 3.2rem;

        > .divImg, .divName, .divCategory, .divIngr, .divPrice, .divDescription{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.6rem;

          width: 22.9rem;

          > h2 {         
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.6rem;
            color: ${({theme}) => theme.COLORS.Light_400};          
          }
        }

        > .divName{
          width: 46.3rem;
        }

        > .divIngr {
          width: 84rem;        
        }

        .divDescription{
          width: 100%;
        }                
      }

      > .section4{
        > .divButton{        
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 3.2rem;
          
          > button:first-child{
            background-color: ${({theme}) => theme.COLORS.Dark_800};            
            color: ${({theme}) => theme.COLORS.Light_100};
          }

          > button:last-child{
            background-color: ${({theme}) => theme.COLORS.Tints_tomato_400};
          }
        }
      }
    }  
  }

  @media (max-width: 27.374em){
    margin: 0 auto;
    max-width: 36.4rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
      
    > :first-child{
      svg{
        width: 22.061px;
        height: 22.061px;
      }

      h1{
        font-size: 1.6546rem;
        line-height: 2.3164rem;
      }
      margin-top: 4rem;
    }

    > h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 3rem;
      font-weight: 500;
      line-height: 4.5rem;
      color: ${({theme}) => theme.COLORS.Light_300};
    }
    
    > .hero {
      max-width: 36.4rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.4rem;
      
      > .section1, .section2, .section3 {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.4rem;

        > .divImg, .divName, .divCategory, .divIngr, .divPrice, .divDescription{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.6rem;

          width: 100%;

          > h2 {         
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.6rem;
            color: ${({theme}) => theme.COLORS.Light_400};          
          }
        }              
      }

      > .section4{
        width: 100%;
        > .divButton{        
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 3.2rem;

          font-size: 1.4rem;
          
          > button:first-child{
            width: 15.2rem;
            background-color: ${({theme}) => theme.COLORS.Dark_800};            
            color: ${({theme}) => theme.COLORS.Light_100};
          }

          > button:last-child{
            width: 17.2rem;
            background-color: ${({theme}) => theme.COLORS.Tints_tomato_400};
          }
        }
      }
    }  
  }
`
export const InputImage = styled.div`  
  width: 100%;
  > label {  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    
    background-color: ${({theme}) => theme.COLORS.Dark_800};
    
    width: 100%;
    height: 4.8rem;
    border-radius: 0.8rem;    
    padding: 1.2rem 2.6rem 1.2rem 2.6rem;
    
    cursor: pointer;
    
    > h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
      color: ${({theme}) => theme.COLORS.Light_100};
    }

    > input{
      display: none;
    }  
  }
`

export const InputSelect = styled.div`
  @media (min-width: 27.375em){
    display: flex;
    flex-direction: row;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.Dark_800};
    border-radius: 0.8rem;
    height: 4.8rem;
    > label{ 
      > select{
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.2rem;
    
        appearance: none;
        background: transparent;
        background: url(../../../assets/select.svg) no-repeat center transparent;
        background-position-x: 97%;
        color: ${({theme}) => theme.COLORS.Light_400};
    
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        align-items: center;
    
        width: 34.5rem;
        height: 4.8rem;
        padding: 1.3rem 1.4rem 1.3rem 1.6rem;
        
        > option{
          background-color: ${({theme}) => theme.COLORS.Dark_800};      
        }
      }  

  }
  }

  @media (max-width: 27.374em){
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.Dark_800};
    border-radius: 0.8rem;
    height: 4.8rem;
    > label{ 
      > select{
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.2rem;
    
        appearance: none;
        background: transparent;
        background: url(../../../assets/select.svg) no-repeat center transparent;
        background-position-x: 97%;
        color: ${({theme}) => theme.COLORS.Light_400};
    
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        align-items: center;
    
        width: 34.5rem;
        height: 4.8rem;
        padding: 1.3rem 1.4rem 1.3rem 1.6rem;
        
        > option{
          background-color: ${({theme}) => theme.COLORS.Dark_800};      
        }
      }  

  }
  }
`

export const Item = styled.div`
  @media (min-width: 27.375em){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  
    height: 4.8rem;
    width: 100%;
    padding: 0.8rem;
  
    border-radius: 0.8rem;
    background-color: ${({theme}) => theme.COLORS.Dark_800};
  }
  
  @media (max-width: 27.374em){
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    max-height: 100.8rem;
    width: 100%;
    padding: 0.8rem;

    border-radius: 0.8rem;
    background-color: ${({theme}) => theme.COLORS.Dark_800};
  }
`