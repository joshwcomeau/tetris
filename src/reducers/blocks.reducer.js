import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  UPDATE_TETROMINOS,
} from '../actions';


const initialState = {
  byId: {},
};


// ////////////////////
// Reducers //////////
// //////////////////
const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case UPDATE_TETROMINOS:
      return action.blocks.reduce((memo, block) => ({
        ...memo,
        [block.id]: block,
      }), {});

    default:
      return state;
  }
};

export default combineReducers({
  byId,
});


// ////////////////////
// Selectors /////////
// //////////////////
export const byIdSelector = state => state.blocks.byId;
