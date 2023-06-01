import styled from "styled-components";

export const Container = styled.button`  
  display: flex;
  flex: row;
  align-items: center;
  gap: 0px;
  background: none;
  border: none;
  color: ${({theme}) => theme.COLORS.Light_300};

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;  
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
  }

`