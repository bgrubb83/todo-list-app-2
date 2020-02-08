import React from 'react';
import ListItem from './ListItem';

function List(props) {
    return (
        <React.Fragment>
            {props.todos.map((todo) => {
                return <ListItem todo={todo} key={todo.timeStamp}/>
            })}
        </React.Fragment>
    )
}

export default List;