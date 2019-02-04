import React, {Component} from 'react';
import {connect} from 'react-redux';
import News from '../components/News';
// import {fetchSurveys, deleteSurveys} from '../actions';
import { withRouter } from 'react-router-dom';

class newsContainer extends Component {
  render(){
    return <News 
        
            />;
  }
}


// const mapStateToProps = ({surveys}) => {
//   return {
//     surveys : surveys.surveys
//   }
// };
// const mapDispatchToProps = (dispatch) => ({
//   fetchSurveys: () => {
//     dispatch(fetchSurveys());
//   },
//   deleteSurveys: (id) => {
//     dispatch(deleteSurveys(id));
//   }
// });
export default withRouter(connect(null,null)(newsContainer));
