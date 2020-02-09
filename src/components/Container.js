import React from 'react'
import HeaderBar from '../components/HeaderBar';
import List from '../components/List';
import Footer from '../components/Footer';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    addTodo = (event, todoText) => {
        event.preventDefault(); 
        const newTodo = { text: todoText, timeStamp: Date.now().toString() }
        const newTodos = [ ...this.state.todos, newTodo ];
        this.setState( { todos: newTodos } );
    }

    deleteTodo = (timeStamp) => {
        const newTodos = [ ...this.state.todos ].filter((todo) => {
            return todo.timeStamp && todo.timeStamp !== timeStamp;
        })
        this.setState({ todos: newTodos });
    }

    render() {
        return (
            <React.Fragment>
                <HeaderBar
                    addTodo={this.addTodo}
                />
                <List
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                />
                <Footer />
            </React.Fragment>
        );
    }

}

export default Container