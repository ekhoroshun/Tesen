import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styling
import './sass/bootstrap.scss';
import './sass/App.scss';
import './sass/JobDetail.scss';


// Components
import Bootstrap from './Bootstrap';
import Home from './Home';
import JobDetail from './JobDetail';

ReactDOM.render((
    
        <Router>
            <Switch>

            	<Bootstrap>
                	<Route exact path="/" component={ Home } /> 
                    <Route exact path="/job" component={ JobDetail } /> 
                </Bootstrap> 

            </Switch>
        </Router>
   
), document.getElementById('root'));