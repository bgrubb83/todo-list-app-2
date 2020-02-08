import React from 'react'
import HeaderBar from '../components/HeaderBar';
import List from '../components/List';
import Footer from '../components/Footer';

class Container extends React.Component {

    render() {
        return (
            <React.Fragment>
                <HeaderBar />
                <List />
                <Footer />
            </React.Fragment>
        );
    }

}

export default Container