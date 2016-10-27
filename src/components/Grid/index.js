// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import Canvas from '../Canvas';


class Grid extends Component {
  constructor(props) {
    super(props);

    this.draw = this.draw.bind(this);
  }

  draw(canvas, ctx) {
    const {
      numRows,
      numCols,
      tileSize,
      lineColor,
      withOuterBorder,
    } = this.props;

    const width = numCols * tileSize;
    const height = numRows * tileSize;

    // eslint-disable-next-line no-param-reassign
    ctx.strokeStyle = lineColor;

    // Draw the outer border, if requested
    if (withOuterBorder) {
      ctx.rect(0, 0, width, height);
      ctx.stroke();
    }

    // Draw all the row lines
    for (let i = 1; i < numRows; i += 1) {
      this.drawLine(
        ctx,
        [0, i * tileSize],
        [width, i * tileSize]
      );
    }

    // Draw all the col lines.
    for (let i = 1; i < numCols; i += 1) {
      this.drawLine(
        ctx,
        [i * tileSize, 0],
        [i * tileSize, height]
      );
    }
  }

  drawLine(ctx, from, to) {
    ctx.beginPath();
    ctx.moveTo(...from);
    ctx.lineTo(...to);
    ctx.stroke();
  }

  render() {
    const { numRows, numCols, tileSize } = this.props;
    const width = numCols * tileSize;
    const height = numRows * tileSize;

    return (
      <Canvas
        width={width}
        height={height}
        draw={this.draw}
      />
    );
  }
}

Grid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
  tileSize: PropTypes.number.isRequired,
  lineColor: PropTypes.string.isRequired,
  withOuterBorder: PropTypes.bool.isRequired,
};

Grid.defaultProps = {
  lineColor: '#CCC',
  withOuterBorder: false,
};

export default Grid;
