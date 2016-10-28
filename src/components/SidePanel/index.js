// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import StartGameButton from '../StartGameButton';
import styles from './styles';


const SidePanel = () => {
  return (
    <div className={css(styles.sidePanel)}>
      <StartGameButton />
    </div>
  );
};

SidePanel.propTypes = {

};

SidePanel.defaultProps = {

};

export default SidePanel;
