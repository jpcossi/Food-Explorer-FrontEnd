import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  align-items: center;
  padding-right: 0.4rem;
  border-radius: 0.8rem;
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.Light_500}` : "none"};
  
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.Light_600};
  
  > input {
    padding: 1rem 1rem;
    width: 8.93rem;
    height: 3.2rem;    
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;
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