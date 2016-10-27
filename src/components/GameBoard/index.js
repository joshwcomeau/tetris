import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import Grid from '../Grid';
import { numRows, numCols, tileSize } from '../../constants/game-board';


const styles = StyleSheet.create({
  gameboard: {
    width: numCols * tileSize,
    height: numRows * tileSize,
  },
});

const GameBoard = () => (
  <div className={css(styles.gameboard)}>
    <Grid
      withOuterBorder
      numRows={numRows}
      numCols={numCols}
      tileSize={tileSize}
      lineColor="#EEE"
    />
  </div>
);

export default GameBoard;
