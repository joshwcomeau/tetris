/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import StartGameButton from './index';

describe('StartGameButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<StartGameButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
