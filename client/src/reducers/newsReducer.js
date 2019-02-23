import {
    FETCH_NEWS
  } from '../actions/types';
import { handleActions } from 'redux-actions';
  
const formInitialState = {
    news : []
}
export default handleActions({
    [FETCH_NEWS] : (state, action) => {
        console.log(action.payload)
        return {
            news : action.payload
        }
    }
}, formInitialState)
  