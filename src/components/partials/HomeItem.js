import React, { Component } from 'react';

class HomeItem extends Component {  
  render(props) {    
    return (
        <div className="card col-md-3" style={{marginBottom: 20 + 'px'}}>
            <img className="card-img-top" src={this.props.result.picture.large} alt={this.props.result.name.first} />
            <div className="card-block">
                <h4 className="card-title">{this.props.result.name.first} {this.props.result.name.last}</h4>
                <p className="card-text">{this.props.result.cell}</p>
                <p className="card-text"><small className="text-muted">{this.props.result.email}</small></p>
                <p></p>
            </div> 
        </div>
       );
  }
}

export default HomeItem;