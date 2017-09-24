import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeItem from './partials/HomeItem';

class HomeList extends Component {

        componentDidMount() {
            console.log('componentDidMount');
        } 

        renderHomeList() {
            return this.props.items.map(item => {
                return (
                    <HomeItem key={item.title} item={item} />
                )
            })
        }

        render() {
            return (
                <div className="row">
                    {this.renderHomeList()}
                </div>
            )
        }
}

function mapStateToProps(state) {
    console.log("state : ", state);
    return {
      items : state.items
    }
}

function mapDispatchToProps(dispatch) {
    return dispatch({ type: 'FETCH_DATA' })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);
