// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import { scaleCanvas } from '../../helpers/canvas';


class Canvas extends Component {
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');

    scaleCanvas(this.canvas, this.ctx);

    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    // Reset the canvas, so that the update can just draw the new contents.
    this.ctx.clearRect(0, 0, this.props.width, this.props.height);

    this.props.draw(this.canvas, this.ctx);
  }

  render() {
    return (
      <canvas
        ref={c => this.canvas = c}
        style={this.props.style}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}

Canvas.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  draw: PropTypes.func.isRequired,
};

Canvas.defaultProps = {
  width: 800,
  height: 600,
};

export default Canvas;
