import { createSelector } from 'reselect';

import {
  activeTetrominoSelector,
  previewTetrominoSelector,
  queueSelector,
  byIdSelector as tetrominosByIdSelector,
} from '../reducers/tetrominos.reducer';
import {
  byIdSelector as blocksByIdSelector,
} from '../reducers/blocks.reducer';

// Essentially, we just want to replace the tetromino's `blockId` array
// with the actual blocks. We want to denormalize and nest the data.
function getTetrominoWithBlocks(tetromino, blocksById) {
  if (!tetromino) {
    return null;
  }
  const tetrominoWithBlocks = {
    ...tetromino,
    blocks: tetromino.blockIds.map(id => blocksById[id]),
  };

  delete tetrominoWithBlocks.blockIds;

  return tetrominoWithBlocks;
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

export const queuedTetrominosWithBlocksSelector = createSelector(
  queueSelector,
  tetrominosByIdSelector,
  blocksByIdSelector,
  (queue, tetrominosById, blocksById) => {
    return queue
      .map(tetrominoId => {
        const tetromino = tetrominosById[tetrominoId];
        const blocks = tetromino.blockIds.map(blockId => blocksById[blockId]);

        if (!tetromino.position) {
          return null;
        }

        return {
          ...tetromino,
          blocks,
        };
      })
      .filter(tetromino => !!tetromino);
  }
);
