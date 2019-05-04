import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StoreState } from '../../store';
import * as colorActions from '../../store/colors/actions';

import * as S from './Palette.styles';

type Props = {
  colors: string[];
  currentColors: {
    primary: string;
    secondary: string;
  };
} & typeof colorActions;

const Palette = ({ colors, currentColors, changeColor }: Props) => {
  const onChangeColor = (color: string) => (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    changeColor(
      e.button === 0
        ? {
            primary: color,
          }
        : {
            secondary: color,
          }
    );
  };

  return (
    <S.This>
      <S.Swatch {...currentColors} />
      <S.Paints>
        {colors.map((color) => (
          <S.Paint
            paintColor={color}
            key={`paint-${color}`}
            onMouseDown={onChangeColor(color)}
          />
        ))}
      </S.Paints>
    </S.This>
  );
};

export default connect(
  ({ color }: StoreState) => color,
  (dispatch) => bindActionCreators(colorActions, dispatch)
)(Palette);
