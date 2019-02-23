import axios from 'axios';
import { 
        FETCH_NEWS,
       } from './types';

export const fetchNews = () => async dispatch => {
    const res = await axios.get('/api/news');
    dispatch({ type: FETCH_NEWS, payload: res.data});
};

