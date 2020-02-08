import React from 'react';
import TodoInput from './TodoInput';

function HeaderBar(props) {
    return <TodoInput addTodo={props.addTodo} />;
}

export default HeaderBar;