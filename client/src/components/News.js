import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    renderNews() {       
        return this.props.news.map(item => {
            return (    
                <div className="card brown lighten-3" key={item.key}>
                    <div className="card-content white-text">
                        <span className="card-title">{item.title}</span>
                        <p>{item.summary}  - <i>{item.source}</i> - </p>
                    </div>
                    <div className="card-action">
                        <a className="white-text" href={item.url}>full article</a>
                        <div className="right white-text">Date : {item.date}</div>
                    </div>
                </div>   
            );
        });
    }
    
    render () { 
        return (
            <div>
                <div>
                    {this.renderNews()}
                </div>
                <div className="fixed-action-btn ">
                    <Link to="/surveys/new" className="btn-floating btn-large card brown lighten-2">
                        <i className="material-icons">add</i>
                    </Link>
                </div> 
            </div>
        );
    }
}

export default News