import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';
import {fetchSurveys, deleteSurveys} from '../actions';
import { withRouter } from 'react-router-dom';

class dashboardContainer extends Component {
  render(){
    const {fetchSurveys, surveys,deleteSurveys} = this.props;
    return <Dashboard 
              fetchSurveys = {fetchSurveys}
              deleteSurveys = {deleteSurveys}
              surveys = {surveys}
            />;
  }
}


const mapStateToProps = ({surveys}) => {
  return {
    surveys : surveys.surveys
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchSurveys: () => {
    dispatch(fetchSurveys());
  },
  deleteSurveys: (id) => {
    dispatch(deleteSurveys(id));
  }
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(dashboardContainer));
