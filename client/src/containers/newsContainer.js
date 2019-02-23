import React, {Component} from 'react';
import {connect} from 'react-redux';
import News from '../components/News';
// import {fetchNews} from '../actions';
import { withRouter } from 'react-router-dom';

class newsContainer extends Component {
  render(){
    const {news} = this.props;
    return <News 
            news = {news}
            />;
  }
}

const mapStateToProps = ({news}) => {
  return {
    news : news.news
  }
};
// const mapDispatchToProps = (dispatch) => ({
//   fetchSurveys: () => {
//     dispatch(fetchSurveys());
//   },
//   deleteSurveys: (id) => {
//     dispatch(deleteSurveys(id));
//   }
// });
export default withRouter(connect(mapStateToProps,null)(newsContainer));
