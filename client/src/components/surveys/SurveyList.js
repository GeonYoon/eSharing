import React, { Component } from 'react';

class SurveyList extends Component {
    // what is life cycle method? 
    componentDidMount() {
        this.props.fetchSurveys();
    }
    
    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On: { new Date(survey.dateSent).toLocaleDateString() }
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Yes : {survey.yes}</a>
                        <a>No: {survey.no}</a>
                        <i
                            className = "material-icons right"
                            onClick={() => this.props.deleteSurveys(survey._id)}
                            style={{cursor:"pointer"}}
                        >
                            delete
                        </i>
                    </div>

                </div>
            );
        });
    }

    
    render () {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

export default SurveyList