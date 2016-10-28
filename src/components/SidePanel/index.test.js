/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SidePanel from './index';

describe('SidePanel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SidePanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
