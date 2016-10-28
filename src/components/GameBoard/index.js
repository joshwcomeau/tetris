import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import Grid from '../Grid';
import { NUM_ROWS, NUM_COLS, TILE_SIZE } from '../../constants/game-board';


const styles = StyleSheet.create({
  gameboard: {
    width: NUM_COLS * TILE_SIZE,
    height: NUM_ROWS * TILE_SIZE,
  },
});

const GameBoard = () => (
  <div className={css(styles.gameboard)}>
    <Grid
      withOuterBorder
      numRows={NUM_ROWS}
      numCols={NUM_COLS}
      tileSize={TILE_SIZE}
      lineColor="#EEE"
    />
  </div>
);

export default GameBoard;
