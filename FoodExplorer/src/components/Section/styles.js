import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  gap: 27px;
  margin-top: 50px;
  
  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 44.8px;
    text-align: left;

    width: 100%;
    
    color: ${({theme}) => theme.COLORS.Light_300};
  }
`