import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapReduxToProps = (reduxStore) => ({
    reduxStore
});

class CountPage extends Component{

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_COUNT'});
    }

    render(){

        const countList = (
            <ul>
            {this.props.reduxStore.shelf.countReducer.map(item => <li key={item.id}>User: {item.username} Posts: {item.total}</li>)}
            </ul>
        );

        return(
            <div>
                {countList}
            </div>
        );
    }
}

export default connect(mapReduxToProps)(CountPage);