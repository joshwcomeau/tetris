// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';
import Block from '../Block';


const Tetromino = ({ position, color, blocks }) => {
  console.log('TETROMINIO', position, color, blocks);
  return (
    <div className={css(styles.tetromino)}>
      {blocks.map(block => (
        <Block
          color={color}
          position={[
            position[0] + block.localOffset[0],
            position[1] + block.localOffset[1],
          ]}
        />
      ))}
    </div>
  );
};

Tetromino.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  blocks: PropTypes.arrayOf(PropTypes.object),
};

Tetromino.defaultProps = {

};

export default Tetromino;
