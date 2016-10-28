// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const Button = ({ children, onClick, mergeStyles }) => {
  return (
    <button className={css(styles.button, mergeStyles)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
};

Button.defaultProps = {

};

export default Button;
