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
const byId = (state = initialState.byId, { type, blocks }) => {
  switch (type) {
    case UPDATE_TETROMINOS:
      return blocks.reduce((memo, block) => ({
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
