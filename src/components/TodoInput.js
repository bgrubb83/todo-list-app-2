import React from 'react';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todoText: '',
        }
    }

    handleChange = (event) => {
        this.setState({ todoText: event.target.value });
    }

    handleSubmit = (event) => {
        this.props.addTodo(event, this.state.todoText);
        this.setState({ todoText: '' });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={(event) => { this.handleSubmit(event) }}>
                    <input
                        type="text"
                        value={this.state.todoText}
                        onChange={this.handleChange}
                        placeholder="What you wanna do? 🤷"
                    />
                    <button type="submit" disabled={this.state.todoText.length === 0}>Add</button>
                </form>
            </React.Fragment>
        );
    }
    
}

export default TodoInput;