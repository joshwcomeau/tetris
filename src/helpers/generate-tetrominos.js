import times from 'lodash/times';
import sample from 'lodash/sample';
import guid from 'guid';

import {
  red, orange, yellow, green, blue, indigo, violet,
} from '../style-variables';

const tetrominoDefinitions = {
  'I': {
    type: 'I',
    color: blue,
    blockMapping: [       //        |
      [-1, 0],            //        |
      [0, 0],             // ---[x][x][x][x]
      [1, 0],             //        |
      [2, 0],             //        |
    ],
  },
  'O': {
    type: 'O',
    color: yellow,
    blockMapping: [       //
      [0, -1],            //     |
      [1, 1],             //    [x][x]
      [1, 0],             // ---[x][x]
      [0, 0],             //
    ],
  },
  'T': {
    type: 'T',
    color: violet,
    blockMapping: [       //
      [-1, 0],            //     |
      [0, 0],             // [x][x][x]
      [0, 1],             //    [x]
      [1, 0],             //
    ],
  },
  'J': {
    type: 'J',
    color: indigo,
    blockMapping: [       //
      [-1, 0],            //     |
      [0, 0],             // [x][x][x]
      [1, 0],             //     | [x]
      [1, -1],            //
    ],
  },
  'L': {
    type: 'L',
    color: orange,
    blockMapping: [       //
      [-1, 1],            //     |
      [-1, 0],            // [x][x][x]
      [0, 0],             // [x] |
      [1, 0],             //
    ],
  },
  'S': {
    type: 'S',
    color: green,
    blockMapping: [       //
      [-1, 0],            //     |
      [0, 0],             // ---[x][x]
      [0, 1],             // [x][x]
      [1, 0],             //
    ],
  },
  'Z': {
    type: 'Z',
    color: red,
    blockMapping: [       //
      [-1, 0],            //     |
      [0, 0],             // [x][x]---
      [0, 1],             //    [x][x]
      [1, 0],             //
    ],
  },

};

export default function generateTetrominos({ num = 100 } = {}) {
  const tetrominos = [];
  const blocks = [];

  times(num, () => {
    const tetromino = {
      id: guid.raw(),
      ...sample(tetrominoDefinitions),
    };

    const tetrominoBlocks = tetromino.blockMapping.map(mapping => ({
      id: guid.raw(),
      color: tetromino.color,
      globalPosition: [],
      localOffset: mapping,
    }));
    delete tetromino.blockMapping;

    tetromino.blockIds = tetrominoBlocks.map(({ id }) => id);

    tetrominos.push(tetromino);
    blocks.push(...tetrominoBlocks);
  });

  return { tetrominos, blocks };
}
