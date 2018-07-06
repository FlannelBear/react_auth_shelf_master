import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            description:'',
            image_url:'',
            person_id: this.props.user.id
        }
    }

    handleChange = (event) => {
      const prop = event.target.id;
      const val = event.target.value;
      this.setState({
        ...this.state, [prop]: val
      });
    }
  
    handleClick = (event) => {
      event.preventDefault();
      if(this.state.description.length > 0 || this.state.image_url.length > 0){
        this.props.dispatch({ type: 'ADD_ITEM', payload: this.state });
        this.setState({...this.state, description: '', image_url: ''})
      } else {
        alert('Somewthing wrong AddItemPage');
      }
    }

    render() {
      return (
        <div>
          <Nav />
          <form>
            <input id="description" value={ this.state.description } onChange={this.handleChange} 
              placeholder="Description" />
            <input id="image_url" value={ this.state.image_url} onChange={this.handleChange} 
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