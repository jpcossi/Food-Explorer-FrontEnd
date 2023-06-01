import styled from 'styled-components'

export const Container = styled.section`
margin: auto;
  
  display: flex;
  flex-direction:  row;
  text-align: center;
  gap: 27px;
  width: 1120px ;
  height: 529.72px ;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 44.8px;
    letter-spacing: 0em;
    text-align: left;
    
    color: ${({theme}) => theme.COLORS.Light_300};
  }



`