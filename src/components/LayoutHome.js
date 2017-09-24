import React, { Component } from 'react';
import Navbar from './partials/Navbar';
import HomeList from './ListHome';

class LayoutHome extends Component {  

    render() {
    return (
            <div id="home">
                <Navbar />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">HomePage</h1>
                        <p className="lead">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ...</p>
                    </div>
                </div>
                <div className="container">
                        <HomeList />
                </div>
            </div>
       );
  }
}

export default LayoutHome;