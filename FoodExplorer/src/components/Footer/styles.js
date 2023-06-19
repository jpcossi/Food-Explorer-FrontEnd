import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 77px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 123px;
  margin-top: 46.72px;
  
  background-color: ${({theme}) => theme.COLORS.Dark_600};
  
  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${({theme}) => theme.COLORS.Light_200};

  }
`