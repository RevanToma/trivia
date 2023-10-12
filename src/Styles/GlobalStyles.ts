import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,400;1,500&family=Rubik+Microbe&display=swap');
</style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;  
}
  


 body {
  background-color: #323232 ;
  margin: 0;  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,Poppins,
  Arial, sans-serif;
  font-size: 1.4rem;
  scroll-behavior: smooth;



}

li {
  list-style:circle;
}

a { 
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
  
  transition: all 0.5s ease;
 padding: 1.5rem;
 line-height: 22px;
letter-spacing: 0.40px;
font-size: 2rem;
font-weight: bold;
font-family: Roboto;
}

#root{
 display: flex;
 justify-content: center;

 h1,h4,li{
  color: #F1D202;
 }

 h1 {
    font-family: Roboto;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 3rem;
  }

  h4 {
    font-family: Roboto;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 2rem;
  }

  li {
    font-size: 1.6rem;
    letter-spacing: 1px;
  }
 
}


`;
