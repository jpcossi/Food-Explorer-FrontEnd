import styled from "styled-components";

export const Container = styled.button`
border: none;
  border-radius: 5px;
  padding: 12px 24px 12px 24px;

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  
  color: ${({theme}) => theme.COLORS.Light_100};
  background-color: ${({theme}) => theme.COLORS.Tints_tomato_100};
`