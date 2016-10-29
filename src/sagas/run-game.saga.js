/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
/* eslint-enable */

import {
  GAME_OVER,
  GAME_TICK,
  INITIALIZE_GAME,
  gameTick,
  incrementTetrominoPosition,
  resetGame,
  placeTetrominoOnBoard,
  updateTetrominos,
} from '../actions';
import {
  activeTetrominoWithBlocksSelector,
} from '../selectors/tetromino-with-blocks.selector';
import generateTetrominos from '../helpers/generate-tetrominos';


// Our central game loop.
// This function doesn't do much: It figures out how long it needs to wait
// until the next 'tick', and then invokes the tick.
//
// Note that unlike many game loops, things can happen in the game outside
// this loop. For example, the user can rotate their piece multiple times
// within a game loop. The loop just controls evaluating the block's
// collisions, deciding if the game is over, and dropping the active
// tetromino by 1 position.
function* gameLoop() {
  try {
    while (true) {
      // TODO: This should be derived from two pieces of state:
      //  - current level (gets faster over time),
      //  - fast drop (when the user presses down, ticks pass much faster)
      const TICK_SPEED = 1000;

      yield delay(TICK_SPEED);
      yield put(gameTick());
    }
  } catch (e) {
    // Game loop canceled.
  }
}

function* handleGameTick() {
  // A game frame consists of dropping the currently-active tetromino
  // down 1 space, if possible. If it's not possible, destroy the tetromino,
  // lock its blocks into that position, update the queue so that the next
  // tetromino is ready to go.

  const activeTetromino = yield select(activeTetrominoWithBlocksSelector);

  // If the piece is not yet on the board, position it.
  if (!activeTetromino.position) {
    // TODO: Lose condition. Check if we CAN place it on the board.
    yield put(placeTetrominoOnBoard({ id: activeTetromino.id }));
  } else {
    // Lower the piece by 1 row
    yield put(incrementTetrominoPosition({ id: activeTetromino.id }));
  }
}

function* handleInitializeGame() {
  yield put(resetGame());

  // TODO: Move these. Should be part of the tick process (check if <2
  // exist, if so then build more)
  const { tetrominos, blocks } = generateTetrominos({ num: 2 });
  yield put(updateTetrominos({ tetrominos, blocks }));

  const running = yield fork(gameLoop);

  yield take(GAME_OVER);
  yield cancel(running);
}

export function* watchGameTick() {
  yield* takeEvery(GAME_TICK, handleGameTick);
}

export function* watchInitializeGame() {
  yield* takeLatest(INITIALIZE_GAME, handleInitializeGame);
}
