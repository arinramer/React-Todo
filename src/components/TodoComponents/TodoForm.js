import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }
    handleChange = e => {
        this.setState({input: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({input: ""})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" placeholder="...todo" value={this.state.input} onChange={this.handleChange}></input>
                <button>Add Todo</button><button onClick={() => this.props.clearCompleted()}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;