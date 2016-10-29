/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Tetromino from './index';

describe('Tetromino', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Tetromino />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
