import styled from 'styled-components'

export const Container = styled.section`
  @media (min-width: 27.375em){
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    gap: 2.7rem;
    margin-top: 5rem;
    
    > h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.48rem;
      text-align: left;

      width: 100%;

      color: ${({theme}) => theme.COLORS.Light_300};
    }  
  }

  @media (max-width: 27.374em){
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    gap: 2.7rem;
    margin-top: 5rem;
    
    > h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.52rem;
      text-align: left;

      width: 100%;
            
      color: ${({theme}) => theme.COLORS.Light_300};
    }
  }  
`