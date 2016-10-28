import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import update from 'immutability-helper';

import {
  UPDATE_TETROMINOS,
  PLACE_TETROMINO_ON_BOARD,
} from '../actions';
import { NUM_COLS } from '../constants/game-board';


const initialState = {
  byId: {},
  queue: [],
};
const startingPosition = [
  NUM_COLS / 2,
  0,
];

// ////////////////////
// Reducers //////////
// //////////////////
const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case UPDATE_TETROMINOS:
      return action.tetrominos.reduce((memo, tetromino) => ({
        ...memo,
        [tetromino.id]: tetromino,
      }), {});

    case PLACE_TETROMINO_ON_BOARD:
      return update(state, {
        [action.id]: {
          position: {
            $set: startingPosition,
          },
        },
      });

    default:
      return state;
  }
};

const queue = (state = initialState.queue, { type, tetrominos }) => {
  switch (type) {
    case UPDATE_TETROMINOS: {
      return [
        ...state,
        ...tetrominos.map(({ id }) => id),
      ];
    }

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
const byIdSelector = state => state.tetrominos.byId;
const queueSelector = state => state.tetrominos.queue;

// Our currently-active tetromino is the first one in the queue.
// Once the tetromino is placed, it is destroyed (only its blocks, as
// independent entities, remain).
export const activeTetrominoSelector = createSelector(
  byIdSelector,
  queueSelector,
  (byId, queue) => byId[queue[0]]
);

export const previewTetrominoSelector = createSelector(
  byIdSelector,
  queueSelector,
  (byId, queue) => byId[queue[1]]
);
