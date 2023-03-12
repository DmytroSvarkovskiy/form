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
    .ant-picker-dropdown{
      .ant-picker-panel-container{
        .ant-picker-panel-layout{
          .ant-picker-panel{
            .ant-picker-date-panel{
.ant-picker-body{
table{
  tbody{tr{
    td{
      &.ant-picker-cell-selected{div{background-color:#2bb54b;}

}
    }
  }
    .ant-picker-cell-today{
.ant-picker-cell-inner{
&::before{
  content:'';
  top:-8.5px;
  left:-7.5px;
  color:#333333;
  background-color: #D8FDE4;
  z-index:-1;
  border:1px solid #2bb54b;
  border-radius:50%;
  width:40px;
  height:40px;

}

}
    }
  }
}
}
            }
            .ant-picker-footer{
              a{color:#2bb54b;}
              
            }
          }
        }
      }
    }
  };
  a{
    text-decoration:none;
    color:inherit};
    *,::before,::after{
      box-sizing:border-box;
    }
  
`
