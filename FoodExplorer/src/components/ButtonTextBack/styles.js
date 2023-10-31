import styled from "styled-components";

export const Container = styled.button`  
  display: flex;
  flex: row;
  align-items: center;
  background: none;
  border: none;
  color: ${({theme}) => theme.COLORS.Light_300};

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;  
    font-style: normal;
    font-weight: 500;
    line-height: 3.36rem;
  }
`