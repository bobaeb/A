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
    margin-left: -60px;
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
    position: relative;
  }
  .title {
    width: 400px;
    height: 60px;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    background-color: darkgray;
  }
  .img {
    width: 100%;
    height: 760px;
    margin-top: 80px;
    background-color: red;
  }
  .bottom {
    width: 300px;
    margin: 0 auto;

  }
  .b1 {
    width: 300px;
    height: 30px;
    background-color: darkgray;
  }
  p {
    display: block;
    width: 200px;
    height: 10px;
    text-align: center;
    background-color: gray;
  }
`

export default style
