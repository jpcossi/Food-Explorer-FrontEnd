import styled from "styled-components";

export const Container = styled.div`
  .main{
    display: flex;
    align-items: center;
    gap: 2.5rem;
    height: 13rem;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.COLORS.Dark_700};    
  }  

  .left {
    img{
      width: 10rem;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;    
  }

  .link h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 4.5rem;
    color: ${({theme}) => theme.COLORS.Light_400};
  }
`