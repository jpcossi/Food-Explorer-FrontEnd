import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > svg{
    width: 324px;
    height: 48px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 64px;
  width: 476px;
  height: 540.76px;


  background-color: ${({theme}) => theme.COLORS.Dark_700};
  border-radius: 16px;

  > h1{
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
    color: ${({theme}) => theme.COLORS.Light_100};
  }

  > .section1, .section2{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    > h2{
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      color: ${({theme}) => theme.COLORS.Light_400};
    }    

    > :last-child{
      border: 1px solid ${({theme}) => theme.COLORS.Light_100};
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
    }
  }

  > .button{
    width: 100%;
    height: 48px;
  }
`