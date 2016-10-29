/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Block from './index';

describe('Block', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Block />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
