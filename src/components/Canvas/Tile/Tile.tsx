import React from 'react';

import * as S from './Tile.styles';

type Props = {
  size?: number;
  color?: string;
};

export const Tile = ({ size, color }: Props) => {
  return <S.Tile size={size} color={color} />;
};
