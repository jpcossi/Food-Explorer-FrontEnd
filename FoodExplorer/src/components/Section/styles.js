import styled from 'styled-components'

export const Container = styled.section`
  margin: auto;  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  gap: 27px;
  margin-top: 50px;

  > .break{
    flex-basis: 100%;
    height: 0px;
    padding: 0px;
  }

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 44.8px;
    text-align: left;
    
    color: ${({theme}) => theme.COLORS.Light_300};
  }



`