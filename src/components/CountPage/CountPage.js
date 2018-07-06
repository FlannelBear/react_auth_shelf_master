import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapReduxToProps = ({countReducer}) => ({
    countReducer
});

class CountPage extends Component{
    render(){

        const countList = (
            <ul>
            {this.props.countReducer.map(item => <li key={item.id}>User: {item.username} Posts: {item.total}</li>)}
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