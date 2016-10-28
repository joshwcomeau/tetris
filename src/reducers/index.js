import { combineReducers } from 'redux';

import blocks from './blocks.reducer';
import tetrominos from './tetrominos.reducer';

export default combineReducers({ blocks, tetrominos });
