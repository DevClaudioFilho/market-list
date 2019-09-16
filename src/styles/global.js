import {createGlobalStyle} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    outline:0;
    align-self:center;
    text-align:center;
    justify-content:center;
    
    
}

*.focus{
    outline:0;
}

html, border-style, #root{
    height:100%;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
}

body{
    -webkit-font-smoothing: antialiased;
    color: #170C3A;
    background: #FCFCFD;
    }

border-style, input, button{
    font:20px 'Robot',sans-serif;
}

a{
    color:black;
    text-decoration:none;
}

ul{
    list-style:none;
}

button{
    cursor:pointer;
}

.notification_success{
    background-color:#12DB89
}

 .notification_body{
     padding:30;
     font-size: 18px;
 }

`