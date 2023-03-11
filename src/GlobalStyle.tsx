import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li,p{
    list-style:none;
    margin:0;
    padding:0};
  img{
    display:block;
    width:100%;
}
  body{
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color:#f5f5f5;
    color: '#333333'; 
    &.modal-open{
      overflow:hidden;
    }
  };
  a{
    text-decoration:none;
    color:inherit};
    *,::before,::after{
      box-sizing:border-box;
    }
  
`
