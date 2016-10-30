import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import update from 'immutability-helper';

import {
  INCREMENT_TETROMINO_POSITION,
  PLACE_TETROMINO_ON_BOARD,
  UPDATE_TETROMINOS,
} from '../actions';
import { NUM_COLS } from '../constants/game-board';


const initialState = {
  byId: {},
  queue: [],
};
const startingPosition = [
  Math.floor(NUM_COLS / 2),
  0,
];


// ////////////////////
// Reducers //////////
// //////////////////
const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case INCREMENT_TETROMINO_POSITION:
      console.log(state, action);
      return update(state, {
        [action.id]: {
          position: {
            $apply([x, y]) { return [x, y + 1]; },
          },
        },
      });

    case PLACE_TETROMINO_ON_BOARD:
      return update(state, {
        [action.id]: {
          position: {
            $set: startingPosition,
          },
        },
      });

    case UPDATE_TETROMINOS:
      return action.tetrominos.reduce((memo, tetromino) => ({
        ...memo,
        [tetromino.id]: tetromino,
      }), {});


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
export const byIdSelector = state => state.tetrominos.byId;
export const queueSelector = state => state.tetrominos.queue;

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
