// import { FETCH_SURVEYS } from '../actions/types';

// export default function(state = [], action) {
//     switch (action.type) {
//         case FETCH_SURVEYS:
//             return action.payload;
//         default:
//             return state;
//     }
// }

import {
    FETCH_SURVEYS
  } from '../actions/types';
import { handleActions } from 'redux-actions';
  
const formInitialState = {
    surveys : []
}

export default handleActions({
    [FETCH_SURVEYS] : (state, action) => {
        return {
            surveys : action.payload
        }
    }
}, formInitialState)
  