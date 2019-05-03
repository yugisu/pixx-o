import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StoreState } from '../../store';
import { Pixels, Sizes } from '../../store/draw/types';
import { usePencilTool } from './tools/pencil-tool';
import * as drawActions from '../../store/draw/actions';

import * as S from './Canvas.styles';

type Props = {
  pixels: Pixels;
  sizes: Sizes;
} & typeof drawActions;

const Canvas = ({ pixels, sizes, draw }: Props) => {
  const canvasRef = usePencilTool(draw);

  return (
    <S.This className="canvas" {...sizes} ref={canvasRef}>
      {pixels.map((arr, y) =>
        arr.map((el, x) => (
          <S.Tile
            className="tile"
            data-coords={`${x}-${y}`}
            painted={el}
            size={sizes.tileSize}
            key={`tile${y}-${x}`}
          />
        ))
      )}
    </S.This>
  );
};

export default connect(
  ({ draw }: StoreState) => draw,
  (dispatch) => bindActionCreators(drawActions, dispatch)
)(Canvas);
