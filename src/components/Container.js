import React from 'react'
import HeaderBar from '../components/HeaderBar';
import List from '../components/List';
import Footer from '../components/Footer';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { text: 'Wash the dishes', timeStamp: '1581193183201'},
                {  text: 'Clean the cat', timeStamp: '1581193196214' }
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <HeaderBar />
                <List
                    todos={this.state.todos}
                />
                <Footer />
            </React.Fragment>
        );
    }

}

export default Container