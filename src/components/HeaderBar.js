import React from 'react';
import SearchBar from '../components/SearchBar';

function HeaderBar(props) {
    return <SearchBar addTodo={props.addTodo} />;
}

export default HeaderBar;