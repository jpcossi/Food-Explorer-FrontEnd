import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;
  
  > h1 {        
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: ${({theme}) => theme.COLORS.Light_300};
}
` 