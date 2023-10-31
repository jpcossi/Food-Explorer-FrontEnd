import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 27.375em){
    width: 100%;
    height: 100vh;
    
    .App, .App2, .App3{     
      margin: auto;
      position: relative;
      width: 115rem;
      
      .dragging .card{
        cursor: grab;
        user-select: none;
      }
      
      .dragging{
        scroll-snap-type: none;
        scroll-behavior: auto;
      }
      
      .arrowLeft{
        position: absolute;
        left: 0.5%;
        bottom: 47%;
        cursor: pointer;
      }
      
      .arrowRight{      
        position: absolute;
        left: 96%;
        bottom: 47%;
        cursor: pointer;
        transform: scaleX(-1);
      }
      
      .carousel, .carousel2, .carousel3{      
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
        display: flex;
        flex-direction: row;
        gap: 2.7rem;
      }
      
      .carousel::-webkit-scrollbar, .carousel2::-webkit-scrollbar, .carousel3::-webkit-scrollbar{
        display: none;
      }
      
      .carousel .card, .carousel2 .card, .carousel3 .card{
        scroll-snap-align: start;
      }
    }      
    
    main {
      margin: auto; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      max-width: 115rem;
    }
    
    h1{ 
      font-family: 'Poppins', sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.5rem;
    }

    .first {
      min-height: 100vh;
      position: relative;
    }

    .first .body-content {
      padding-bottom: 14rem;
    }
    
    .search {
      min-height: 100vh;
      position: relative;
    }

    .search .body-content{
      padding-bottom: 14rem;
    }
    
    .search .body-content h1{
      font-size: 2.4rem;
    }
    
    .search .body-content .dishSearch{
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
    
    .App, .App2, .App3{     
      margin: auto;
      position: relative;
      width: 100%;
      width: 37.6rem;
      
      .dragging .card{
        cursor: grab;
        user-select: none;
      }
      
      .dragging{
        scroll-snap-type: none;
        scroll-behavior: auto;
      }
      
      .arrowLeft{
        position: absolute;
        left: 0.5%;
        bottom: 47%;
        cursor: pointer;
      }
      
      .arrowRight{      
        position: absolute;
        left: 91.5%;
        bottom: 47%;
        cursor: pointer;
        transform: scaleX(-1);
      }
      
      .carousel, .carousel2, .carousel3{      
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
        display: flex;
        flex-direction: row;
        gap: 1.6rem;
      }
      
      .carousel::-webkit-scrollbar, .carousel2::-webkit-scrollbar, .carousel3::-webkit-scrollbar{
        display: none;
      }
      
      .carousel .card, .carousel2 .card, .carousel3 .card{
        scroll-snap-align: start;
      }
    }

    main {
      margin: auto; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      width: 37.6rem;
    }

    h1{ 
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.8rem;
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
      margin-top: 5rem;
      
      .dish{
        margin-top: 2.3rem;
      }
    }
  }
`