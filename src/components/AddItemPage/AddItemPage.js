import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
        itemToAdd: {
            description:'',
            image_url:'',
            person_id: this.props.user.id
        }
        }
    }

    handleChange = (event) => {
      this.setState({
        itemToAdd: event.target.value,
      });
    }
  
    handleClick = () => {
        if(this.state.itemToAdd.description.length > 0 || this.state.itemToAdd.image_url.length > 0){
      this.props.dispatch({ type: 'ADD_ITEM', payload: this.state.itemToAdd });
    
    this.setState({
        itemToAdd: '',
        });
    }
        else {
        alert('Somewthing wrong AddItemPage');
        }
    }

    render() {
      return (
        <div>
          <Nav />
          <form>
            <input value={ this.state.itemToAdd.description } onChange={this.handleChange} 
              placeholder="Description" />
            <input value={ this.state.itemToAdd.image_url} onChange={this.handleChange} 
            placeholder="URL"/>
             <button onClick={this.handleClick}>Add Item</button>
          </form>
        </div>
      );
    }
  }
  
  const mapReduxStateToProps = state => ({
      user: state.user
  });
  
  export default connect(mapReduxStateToProps)(AddItem);