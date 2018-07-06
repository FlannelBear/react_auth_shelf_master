import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    shelf: state.shelf
});

class ShelfPage extends Component {
    componentDidMount() {
      this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
      this.props.dispatch({type: 'FETCH_ALL'});
      console.log(this.props.reduxStore);
    }
  
    componentDidUpdate() {
      if (!this.props.user.isLoading && this.props.user.userName === null) {
        this.props.history.push('home');
      }
    }

    deleteItem = (id) => {
        console.log(id);
        this.props.dispatch({type: 'DELETE_ITEM', payload: id})
    }
  
    render() {
      let content = null;
  
      if (this.props.user.userName) {
        content = (
          <div>
            <p>
              Items on Shelf:
            </p>
            <div> 
                  {this.props.shelf.shelfReducer.map( item =>
                    <div>
                      <h3 key={item.id}>{item.description}</h3> 
                      <button onClick={ () => this.deleteItem(item.id) }>Delete</button>
                    </div>
                  )}
            </div>
          </div>
        );
      }
  
      return (
        <div>
          <Nav />
          { content }
        </div>
      );
    }
}

  export default connect(mapStateToProps)(ShelfPage);