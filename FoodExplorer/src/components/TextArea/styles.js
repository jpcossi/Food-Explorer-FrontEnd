import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  padding: 14px;
  border-radius: 8px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  resize: none;

  color: ${({theme}) => theme.COLORS.Light_500};
  background-color: ${({theme}) => theme.COLORS.Dark_800};

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

`