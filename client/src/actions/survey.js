import axios from 'axios';
import { 
        FETCH_USER, 
        FETCH_SURVEYS,
       } from './types';

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    
    dispatch({type : FETCH_SURVEYS, payload : res.data });
};

export const deleteSurveys = (id) => async dispatch => {
    const res = await axios.delete(`/api/surveys/delete/${id}`)
    console.log("here");
    dispatch({type : FETCH_SURVEYS, payload : res.data})
}