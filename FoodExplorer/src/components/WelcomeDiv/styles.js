import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 1120px;
  height: 260px;
  margin-top: 172px;
  
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 8px;

  > .text{
    width: 421.39px;
    height: 72px;
    margin-left: 597px;
    margin-top: 87px;

    > p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      
      color: ${({theme}) => theme.COLORS.Light_300}; 
  }

  > h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 40px;
      line-height: 56px;
      letter-spacing: 0em;
      
      color: ${({theme}) => theme.COLORS.Light_300};
    }
  }

  
` 