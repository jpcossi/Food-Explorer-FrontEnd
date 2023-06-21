import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto;
  grid-template-areas: 
  "header"
  "content";
  
  > main {
    margin: auto;
    width: 1150px;
    display: flex;
    flex-direction: column;
  }

  > h1{ 
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
  }
  `

export const Card = styled.div`
  width: 304px;
  height: 462px;
  border-radius: 8px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  border: 1px solid ${({theme}) => theme.COLORS.Dark_300};
  background-color: ${({theme}) => theme.COLORS.Dark_200};

  
  > .edit {
    position: relative;
    left: 48%;
    top: -4%;
  }

  > .image{
    height: 176px;
    width: 176px;
  }

  > h2{
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;    
    color: ${({theme}) => theme.COLORS.Light_300};
  }

  > p{    
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({theme}) => theme.COLORS.Light_400};

  }

  > h3{
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: center;

    color: ${({theme}) => theme.COLORS.Tints_cake_200};
  }
  
`

