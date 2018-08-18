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
    margin: 0 auto;
  }
  .b1 {
    width: 230px;
    height: 100%;
  }
  .b1 h3 {
    width: 100px;
    height: 20px;
    background-color: gray;
  }
  .b1 .content {
    height: 230px;
    background-color: lightgrey;
  }
.b-content li {
    width: 230px;
    height: 100%;
    background-color: gray;
}
.b-content .p {
   height: 10px;
   background-color: darkgray;
 }
`

export default style
