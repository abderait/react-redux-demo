import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Myapp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link disabled" to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navbar;