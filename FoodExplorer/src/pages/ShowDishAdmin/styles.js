import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 27.375em){
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.Dark_400};

    main {
      max-width: 111.10rem;
      margin: 0 auto;
      margin-top: 3.2rem;
      
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 4.2rem;  
      
      > button:first-child{
        align-self: start;
      }
      
      > .hero{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4.736rem;

        > .left{
          >img{
            height: 38.9rem;
            width: 39.10rem;        
          }
        }
      
        > .right{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0rem;
          gap: 2.4rem;
          
          > .tags{
            margin-bottom: 2.7rem;
            display: flex;        
            justify-content: center;
            align-items: center;

            > .tag{
              font-family: 'Poppins';
              font-size: 1.4rem;
              font-style: normal;
              font-weight: 500;
              line-height: 2.4rem;

              padding: 0.4rem 0.8rem;
              margin-right: 0.8rem;
              border-radius: 0.5rem;
              
              background-color:  ${({theme}) => theme.COLORS.Dark_1000};
              color:  ${({theme}) => theme.COLORS.Light_100};
            }
          }

          > h1 {
              font-family: 'Poppins', sans-serif;
              font-size: 4rem;
              font-weight: 500;
              line-height: 5.6rem;
              color: ${({theme}) => theme.COLORS.Light_300};
          }
            
          > p {
              font-family: 'Poppins', sans-serif;
              font-size: 2.4rem;
              font-weight: 400;
              line-height: 3.4rem;
              color: ${({theme}) => theme.COLORS.Light_300};
          }
        }
      }
    }

    .search h1{
      font-size: 2.4rem;
    }

    .search .dishSearch{
      width: 90rem;
      margin: auto;
      margin-top: 5rem;

      .dish{
        margin-top: 2.3rem;
      }
    }
  }

  @media (max-width: 27.374em){
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.Dark_400};

    .hide{
      display: none;
    }

    main {
      max-width: 31.6rem;
      margin: 0 auto;
      margin-top: 3.2rem;
      margin-bottom: 15.5rem;
      
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1.6rem;  
      
      > button:first-child{
        align-self: start;
      }
      
      > .hero{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;

        > .left{
          >img{
            height: 26.4rem;
            width: 26.4rem;        
          }
        }
      
        > .right{
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          justify-content: center;
          padding: 0rem;
          gap: 2.4rem;
          
          > .tags{
            flex-wrap: wrap;
            margin-bottom: 2.8rem;
            display: flex; 
            align-items: center;
            justify-content: space-between;
            gap: 2rem;

            > .tag{
              font-family: 'Poppins';
              font-size: 1.4rem;
              font-style: normal;
              font-weight: 500;
              line-height: 2.4rem;

              padding: 0.4rem 0.8rem;
              border-radius: 0.5rem;
              
              background-color:  ${({theme}) => theme.COLORS.Dark_1000};
              color:  ${({theme}) => theme.COLORS.Light_100};
            }
          }

          > h1 {
              font-family: 'Poppins', sans-serif;
              font-size: 2.7041rem;
              font-weight: 500;
              line-height: 3.7rem;
              color: ${({theme}) => theme.COLORS.Light_300};
          }
            
          > p {
              font-family: 'Poppins', sans-serif;
              font-size: 1.6225rem;
              font-weight: 400;
              line-height: 2.2715rem;
              color: ${({theme}) => theme.COLORS.Light_300};
          }

          .button{
            width: 31.6rem;
          }
        }
      }
    }

    .search h1{
      font-size: 1.8rem;
    }

    .first {
      min-height: 100vh;
      position: relative;
    }

    .first .body-content {
      padding-bottom: 9rem;
    }
    
    .search {
      min-height: 100vh;
      position: relative;
    }

    .search .body-content{
      padding-bottom: 9rem;
    }

    .search .body-content h1{
      font-size: 1.8rem;      
    }
    
    .search .body-content .dishSearch{
      width: 41rem;
      margin: auto;
      margin-top: 22rem;

      .dish{
        margin-top: 2.3rem;
      }
    }
  }
`