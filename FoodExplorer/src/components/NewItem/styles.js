import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  align-items: center;
  padding-right: 16px;
  border-radius: 8px;
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.Light_500}` : "none"};
  
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.Light_600};
  
  > input {
    padding: 10px 16px;
    width: 100px;
    height: 32px;    
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    font-family: 'Roboto', sans-serif;      
    
    border: none;
    
    background: transparent;
    color: ${({theme, isNew}) => isNew ? theme.COLORS.Light_500 : theme.COLORS.Light_100};
    
    cursor: pointer;
  }

  > button{
    border: none;
    background: none;
    color: ${({theme, isNew}) => isNew ? theme.COLORS.Light_500 : theme.COLORS.Light_100};
  }
` 