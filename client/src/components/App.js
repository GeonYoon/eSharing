import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import dashboardContainer from '../containers/dashboardContainer';
import newsContainer from '../containers/newsContainer';

import Header from './Header';
import Landing from './Landing'
// import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew'


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
        this.props.fetchNews();
    }
    
    render() {
        return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/surveys" component={dashboardContainer}/>
                            <Route exact path="/news" component={newsContainer}/>
                            <Route path="/surveys/new" component={SurveyNew}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
        );
    }
}
    

export default connect(null, actions)(App);