import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import dashboardContainer from '../containers/dashboardContainer';

import Header from './Header';
import Landing from './Landing'
// import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew'


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    
    render() {
        return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={dashboardContainer}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
        );
    }
}
    

export default connect(null, actions)(App);