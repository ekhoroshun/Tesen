import React, { Component } from 'react';
import Header from './Header';

class Bootstrap extends Component {

    render() {

        return [
                 <nav key="header"><Header /></nav>,
                <div key="body">{this.props.children}</div>
          
        ]
    }

}


export default Bootstrap;
