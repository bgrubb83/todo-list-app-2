import React from 'react';

function DeleteIcon(props) {
    return <p onClick={() => { props.deleteTodo(props.timeStamp) }}>X</p>
}

export default DeleteIcon