import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;  
  
  padding: 4px 8px;
  margin-right: 8px;
  border-radius: 5px;
  
  background-color:  ${({theme}) => theme.COLORS.Dark_1000};
  color:  ${({theme}) => theme.COLORS.Light_100};
`