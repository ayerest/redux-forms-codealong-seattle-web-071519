import React, { Component } from 'react';
import {connect} from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  handleChange = (event) => {
    let updatedText = event.target.value
    this.setState({
      text: updatedText
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}></input>
          </p>
            <input type="submit"></input>
        </form>
        {/* Create Todo Component */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
