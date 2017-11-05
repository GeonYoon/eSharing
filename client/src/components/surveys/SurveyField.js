// SurveyField contains logic to render a single
// label and text 
import React from 'react';

export default ({ input, label,meta: {error, touched} }) => {    return(
        //{..input} is same as doing like onBlur={inputl.onBlur} onchange={input.onChange} ...
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom : '5px'}}/>
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}    
            </div>
        </div>
    );
};