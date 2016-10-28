export const GAME_OVER = 'GAME_OVER';
export const GAME_TICK = 'GAME_TICK';
export const INITIALIZE_GAME = 'INITIALIZE_GAME';
export const PLACE_TETROMINO_ON_BOARD = 'PLACE_TETROMINO_ON_BOARD';
export const RESET_GAME = 'RESET_GAME';
export const UPDATE_TETROMINOS = 'UPDATE_TETROMINOS';


export const gameOver = () => ({
  type: GAME_OVER,
});

export const gameTick = () => ({
  type: GAME_TICK,
});

export const initializeGame = () => ({
  type: INITIALIZE_GAME,
});

export const placeTetrominoOnBoard = ({ id }) => ({
  type: PLACE_TETROMINO_ON_BOARD,
  id,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const updateTetrominos = ({ tetrominos, blocks }) => ({
  type: UPDATE_TETROMINOS,
  tetrominos,
  blocks,
});
