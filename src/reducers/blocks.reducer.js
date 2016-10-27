import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  GENERATE_TETROMINOS,
} from '../actions';


const initialState = {
  byId: {},
};


// ////////////////////
// Reducers //////////
// //////////////////
const byId = (state = initialState.byId, { type, tetrominos }) => {
  switch (type) {
    case GENERATE_TETROMINOS:
      return tetrominos.map(tetromino => tetromino.blocks);

    default:
      return state;
  }
};

const queue = (state = initialState.queue, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  queue,
});


// ////////////////////
// Selectors /////////
// //////////////////
