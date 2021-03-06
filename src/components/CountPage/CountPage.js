import React, { Component } from 'react';
import {connect} from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapReduxToProps = state => ({
    user: state.user,
    count: state.shelf.countReducer
});

class CountPage extends Component{

    componentDidMount(){
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        this.props.dispatch({type: 'FETCH_COUNT'});
    }

    render(){

        const countList = (
            <div>
            {this.props.count.map(item => <h3 key={item.id}>User: {item.username} Posts: {item.total === null ? 0 : item.total}</h3>)}
            </div>
        );

        return(
            <div>
                <Nav/>
                <div>
                {countList}
                </div>
            </div>
        );
    }
}

export default connect(mapReduxToProps)(CountPage);