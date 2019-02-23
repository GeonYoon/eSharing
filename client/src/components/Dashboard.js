import React, {Component} from 'react';
import SurveyList from './surveys/SurveyList';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <SurveyList  {...this.props} />
            </div>
        );
    }
  }
export default Dashboard
  
