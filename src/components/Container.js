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

    persistToLocalStorage = (key, value) => {
        console.log('persisting', key, value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    readFromLocalStorage = (key) => {
        console.log('reading', key);
        return localStorage.getItem(key);
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

    componentDidMount = () => {
        const persistedTodos = this.readFromLocalStorage('todos');
        if (persistedTodos) {
            this.setState({ todos: JSON.parse(persistedTodos) });
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.todos !== prevState.todos) {
            this.persistToLocalStorage('todos', this.state.todos);
        }
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