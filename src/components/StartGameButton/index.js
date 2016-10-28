// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { initializeGame } from '../../actions';
import Button from '../Button';
import styles from './styles';


const StartGameButton = ({ children, initializeGame }) => {
  return (
    <Button mergeStyles={styles.startGameButton} onClick={initializeGame}>
      {children}
    </Button>
  );
};

StartGameButton.propTypes = {
  children: PropTypes.node,
  initializeGame: PropTypes.func.isRequired,
};

StartGameButton.defaultProps = {
  children: 'Start Game',
};

export default connect(null, { initializeGame })(StartGameButton);
