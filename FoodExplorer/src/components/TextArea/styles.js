import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  padding: 1.4rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  resize: none;

  color: ${({theme}) => theme.COLORS.Light_500};
  background-color: ${({theme}) => theme.COLORS.Dark_800};

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6rem;
`