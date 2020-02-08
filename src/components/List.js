import React from 'react';
import ListItem from './ListItem';
import CallToAction from './CallToAction';

function List(props) {
    console.log('List props', props)
    return props.todos && props.todos.length > 0 ?
        <React.Fragment>
            {props.todos.map((todo) => {
                return <ListItem todo={todo} key={todo.timeStamp}/>
            })}
        </React.Fragment>    
    :
    <CallToAction />
}

export default List;