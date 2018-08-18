import { css } from 'styled-components'

const style = css`
  body {
    margin:0;
    padding:0;
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
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    margin-bottom: 50px;
    background-color: darkgray;
  }
  .img {
    width: 100%;
    height: 700px;
    background-color: red;
    position: absolute;
    bottom: 0;
    
  
  }
  .bottom {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    position: relative;

  }
  .b1 {
    width: 300px;
    height: 70px;
    background-color: darkgray;
    margin-top: 70px;
   
  }
  p {
    display: block;
    width: 200px;
    height: 20px;
    background-color: gray;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom: 0;
    
  }
`

export default style
