import React, { Component } from 'react';
import FindALocation from './FindALocation';
import Experience from './Experience';
import Tabs from './Tabs';

class Home extends Component {

    constructor(props) {

        super(props);
        
        this.state = {}

    } 

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    render() {
        
        return (
            <div>
               <FindALocation />
               <Experience />
               <Tabs />
            </div>
        )
        
    }

}


export default Home;
