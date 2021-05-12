import React, { Component } from 'react'


class AddTodo extends Component {
    state = {
        content: ''
    }
handleChange = (e) => {
    this.setState({
content: e.target.value
    });
}

handleSumbit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState ({
       content: ''  
    })
   
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    <label>Add a new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}
export default AddTodo;

