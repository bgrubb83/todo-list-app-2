import React from 'react';

function SearchBar(props) {
    return (
        <React.Fragment>
        <p>Search Bar</p>
        <button onClick={() => { props.addTodo('new one') }}>Add</button>
        </React.Fragment>
    );
}

export default SearchBar;