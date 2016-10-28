import { createSelector } from 'reselect';

import {
  activeTetrominoSelector,
  previewTetrominoSelector,
} from '../reducers/tetrominos.reducer';
import {
  byIdSelector as blocksByIdSelector,
} from '../reducers/blocks.reducer';

// Essentially, we just want to replace the tetromino's `blockId` array
// with the actual blocks. We want to denormalize and nest the data.
function getTetrominoWithBlocks(activeTetromino, blocksById) {
  const activeTetrominoWithBlocks = {
    ...activeTetromino,
    blocks: activeTetromino.blockIds.map(id => blocksById[id]),
  };

  delete activeTetrominoWithBlocks.blockIds;

  return activeTetrominoWithBlocks;
}

export const activeTetrominoWithBlocksSelector = createSelector(
  activeTetrominoSelector,
  blocksByIdSelector,
  getTetrominoWithBlocks
);

export const previewTetrominoWithBlocksSelector = createSelector(
  previewTetrominoSelector,
  blocksByIdSelector,
  getTetrominoWithBlocks
);
