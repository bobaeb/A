/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

          <div className='header'>
                <h1></h1>
                <div className='m1'></div>
                <div className='m2'></div>
          </div>

          <div className='middle'>
               <div className='title'>
                 <h2></h2>
               </div>
               <div className='img'></div>
          </div>

          <div className='bottom'>
               <div className='b1'>
                  <h3>title2</h3>
                  <div className='content'></div>
               </div>
               <ul className='b-content'>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li className='p'></li>
               </ul>
                
               <div>
                 <p></p>
               </div>
          </div>

         

      </div>

      


       

      
    ); // eslint-disable-line
  }
}

export default HomePage;
