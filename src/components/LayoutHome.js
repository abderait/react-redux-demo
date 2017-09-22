import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './partials/Navbar';
import HomeItem from './partials/HomeItem';

class LayoutHome extends Component {  

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=16&nat=FR')
          .then(response => {
            console.log(response.data.results);
            this.setState({ items : response.data.results });
          });
    }

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
                        <div className="row">
                            {this.state.items.map(result => <HomeItem key={result.email} result={result} />)}
                        </div>
                    </div>
            </div>
       );
  }
}

export default LayoutHome;