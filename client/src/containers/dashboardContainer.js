import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';
import {fetchSurveys} from '../actions';
import { withRouter } from 'react-router-dom';

class dashboardContainer extends Component {
  render(){
    const {fetchSurveys, surveys} = this.props;
    return <Dashboard 
              fetchSurveys = {fetchSurveys}
              surveys = {surveys}
            />;
  }
}


const mapStateToProps = ({surveys}) => {
  return {
    surveys : surveys
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchSurveys: () => {
    dispatch(fetchSurveys());
}
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(dashboardContainer));
