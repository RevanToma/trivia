import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

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
  background-color: #5caeba ;
  margin: 0;
  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,Poppins,
  Arial, sans-serif;
  font-size: 1.4rem;
  scroll-behavior: smooth;
  

  
}

li {
  list-style: none;
}

a { 
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  transition: transition: all 0.5s ease;
 padding: 1.5rem;
 font-family: "Roboto" !important ;
}




`;
