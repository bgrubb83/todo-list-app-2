import React from 'react';
import DeleteIcon from './DeleteIcon';

function ListItem(props) {
    return (
        <React.Fragment>
            <p>{props.todo.text}</p>
            <DeleteIcon
                deleteTodo={props.deleteTodo}
                timeStamp={props.timeStamp}
            />
        </React.Fragment>
    )
}

export default ListItem;