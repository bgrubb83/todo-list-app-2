import React from 'react';

function TodoInput(props) {
    return (
        <React.Fragment>
        <p>Todo Input</p>
        <button onClick={() => { props.addTodo('new one') }}>Add</button>
        </React.Fragment>
    );
}

export default TodoInput;