// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';
import { NUM_COLS, NUM_ROWS, TILE_SIZE } from '../../constants/game-board';


const Block = ({ position, color }) => {
  return (
    <div
      className={css(styles.block)}
      style={{
        backgroundColor: color,
        width: TILE_SIZE + 'px',
        height: TILE_SIZE + 'px',
        left: position[0] * TILE_SIZE + 'px',
        top: position[1] * TILE_SIZE + 'px',
      }}
    />
  );
};

Block.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
};

Block.defaultProps = {

};

export default Block;
