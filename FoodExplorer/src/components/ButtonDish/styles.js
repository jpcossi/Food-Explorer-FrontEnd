import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem 1.2rem 2.4rem;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  text-align: center;
  
  color: ${({theme}) => theme.COLORS.Light_100};
  background-color: ${({theme}) => theme.COLORS.Tints_tomato_100};
`