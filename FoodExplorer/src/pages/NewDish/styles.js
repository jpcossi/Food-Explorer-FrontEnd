import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({theme}) => theme.COLORS.Dark_400};

  > footer{
    margin-top: 124px;
  }
`

export const Form = styled.form`
  margin: 0 auto;
  max-width: 1120px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
    
  > :first-child{
    margin-top: 40px;
  }

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
    color: ${({theme}) => theme.COLORS.Light_300};
  }
  
  > .hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    
    > :last-child{
      align-self: flex-end;
    }
    
    > .section1, .section2, .section3 {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 32px;

      > .divImg, .divName, .divCategory, .divIngr, .divPrice .divDescription, .divDescription, .divPrice{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        width: 229px;

        > h2 {         
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        color: ${({theme}) => theme.COLORS.Light_400};          
        }
      }

      > .divName{
        width: 463px;
      }

      > .divIngr {
        width: 837px;        
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
        gap: 32px;
        
        > button:first-child{
          background-color: ${({theme}) => theme.COLORS.Tints_tomato_400};
        }
      }
    }
  }
`
export const InputImage = styled.div`  
  > label {  
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
    
    background-color: ${({theme}) => theme.COLORS.Dark_800};
    
    width: 100%;
    height: 48px;
    border-radius: 8px;    
    padding: 12px 26px 12px 26px;
    
    cursor: pointer;
    
    > h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      color: ${({theme}) => theme.COLORS.Light_100};
    }

    > input{
      display: none;
    }  
  }
`

export const InputSelect = styled.div`
display: flex;
flex-direction: row;
align-items: center;

background-color: ${({theme}) => theme.COLORS.Dark_800};
border-radius: 8px;
height: 48px;
> label{ 
  > select{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    appearance: none;
    background: transparent;
    background: url(../../../assets/select.svg) no-repeat center transparent;
    background-position-x: 97%;
    color: ${({theme}) => theme.COLORS.Light_400};

    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    align-items: center;

    width: 345px;
    height: 48px;
    padding: 13px 14px 13px 16px;
    
    > option{
      background-color: ${({theme}) => theme.COLORS.Dark_800};      
    }
  }  
}
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  height: 48px;
  width: 100%;
  padding: 8px;

  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.Dark_800};
`