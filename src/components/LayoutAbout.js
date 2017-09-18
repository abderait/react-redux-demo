import React, { Component } from 'react';

import Navbar from './partials/Navbar';

class LayoutAbout extends Component {  
  render() {
    return (
            <div id="about">
                <Navbar />
                <div className="">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-3">About</h1>
                            <p className="lead">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ...</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    
                </div>
            </div>
       );
  }
}

export default LayoutAbout;