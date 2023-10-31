import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;
  
  > h1 {        
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${({theme}) => theme.COLORS.Light_300};
}
` 