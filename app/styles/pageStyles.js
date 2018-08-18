import { css } from 'styled-components'

const style = css`
  body {
  }
  .header {
    width: 960px;
    height: 70px;
    margin: 0 auto;
    position: relative;
  }
  .header h1{
    width: 120px;
    height: 30px;
    background-color: gray;
    position: absolute;
  }
  .m1 { 
    width: 120px;
    height: 30px;
    background-color: gray;
    position: absolute;
    left: 50%;
  }
  .m2 { 
    width: 120px;
    height: 30px;
    background-color: gray;
    position: absolute;
    right: 0;
  }
  .middle {
    width: 960px;
    height: 800px;
    margin: 0 auto;
  }
  .title {
    width: 50%;
    height: 60px;
    background-color: darkgray;
  }
  .img {
    width: 100%;
    height: 760px;
    margin-top: 20px;
    background-color: red;
  }
  .bottom {
    width: 960px;
    height: 400px;
    margin: 20px auto;
  }
  .b1 {
    width: 230px;
    height: 100%;
    float: left;
   
  }
  .b1 h3 {
    width: 100px;
    height: 20px;
    background-color: gray;
  }
  .b1 .content {
    width: 720px;
    height: 400px;
    background-color: lightgrey;
    float: right;
   
  }
  .b1 .content li {
    float: left;
    width: 200px;
    height: 350px;
    background-color: darkgray;
  }
  .b1 .content .p{
    width: 720px;
    height: 20px;
    background-color: darkgray;
    margin-top: 20px;
  }
`

export default style
