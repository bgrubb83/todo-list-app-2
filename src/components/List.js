import React from 'react';
import ListItem from './ListItem';
import CallToAction from './CallToAction';

function List(props) {
    return props.todos && props.todos.length > 0 ?
        <React.Fragment>
            {props.todos.map((todo) => {
                return <ListItem
                    todo={todo}
                    deleteTodo={props.deleteTodo}
                    key={todo.timeStamp}
                    timeStamp={todo.timeStamp}
                />
            })}
        </React.Fragment>
        :
        <CallToAction />
}

export default List;