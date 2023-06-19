import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({theme}) => theme.COLORS.Dark_400};

> main{
  max-width: 1110.10px;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 155px;
  
  display: flex;
  flex-direction: column;
  gap: 42px;
  
  
  > button:first-child{
    align-self: start;
  }
  
  > .hero{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 47.36px;

    > .left{
      >img{
        height: 389px;
        width: 390.10px;        
      }
    }
  
    > .right{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 24px;
      
      > .tags{
         margin-bottom: 27px;
      }

      > h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 500;
          line-height: 56px;
          color: ${({theme}) => theme.COLORS.Light_300};
      }
        
      > p {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 34px;
          color: ${({theme}) => theme.COLORS.Light_300};
      }
    }
  }
}



`