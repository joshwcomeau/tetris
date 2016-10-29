import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import Grid from '../Grid';
import Tetromino from '../Tetromino';
import { NUM_ROWS, NUM_COLS, TILE_SIZE } from '../../constants/game-board';
import {
  queuedTetrominosWithBlocksSelector,
} from '../../selectors/tetromino-with-blocks.selector';


const styles = StyleSheet.create({
  gameboard: {
    position: 'relative',
    width: NUM_COLS * TILE_SIZE,
    height: NUM_ROWS * TILE_SIZE,
  },
});

const GameBoard = ({ tetrominos }) => {
  console.log('TETROMINOS', tetrominos);
  return (
    <div className={css(styles.gameboard)}>
      {tetrominos.map(tetromino => (
        <Tetromino key={tetromino.id} {...tetromino} />
      ))}
      <Grid
        withOuterBorder
        numRows={NUM_ROWS}
        numCols={NUM_COLS}
        tileSize={TILE_SIZE}
        lineColor="#EEE"
      />
    </div>

  );
};

GameBoard.propTypes = {
  tetrominos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    color: PropTypes.string,
    blocks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      localOffset: PropTypes.arrayOf(PropTypes.number),
    })),
  })),
};

GameBoard.defaultProps = {
  tetrominos: [],
};

const mapStateToProps = state => ({
  tetrominos: queuedTetrominosWithBlocksSelector(state),
});

export default connect(mapStateToProps)(GameBoard);
