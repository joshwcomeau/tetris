/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Canvas from './index';

describe('Canvas', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Canvas />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
