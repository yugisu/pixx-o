import { memo } from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

type Props = {
  tileSize?: number;
  height: number;
  width: number;
};

export const This = styled.div<Props>`
  grid-area: canvas;

  padding: 0.5rem;
  display: grid;
  grid-template: ${({ tileSize, height, width }) =>
    `repeat(${height}, ${tileSize}px) / repeat(${width}, ${tileSize}px)`};
  gap: 0.1rem;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.02)
  );
  border-radius: 0.5rem;

  /* border: 1px dashed #656565; */
  /* box-shadow: 0 8px 10px -5px #aaa; */
`;

export const Tile = memo(
  styled.div<{ size?: number; painted?: string }>`
  ${({ size = 25 }) => css`
    height: ${size}px;
    width: ${size}px;
  `}

  background: ${({ painted = '#fff' }) =>
    css`linear-gradient(to bottom,  ${lighten(0.1, painted)}, ${painted})`};
  
  box-shadow: 0 .1rem .1rem rgba(0, 0, 0, .2);
  border-radius: .3rem;
`,
  ({ painted, size }, next) => painted === next.painted && size === next.size
);
