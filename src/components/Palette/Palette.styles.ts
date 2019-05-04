import styled, { css } from 'styled-components';
import { lighten, transparentize } from 'polished';

export const This = styled.div`
  grid-area: palette;

  height: 2.5rem;
  width: 100%;
  justify-self: center;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  /* background: wheat; */
`;

type SwatchProps = {
  primary: string;
  secondary: string;
};
export const Swatch = styled.div<SwatchProps>`
  width: 6rem;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
  padding: 0.25rem;

  &::before,
  &::after {
    content: '';
    display: block;

    border-radius: 0.5rem;
  }

  &::before {
    ${({ primary }) =>
      css`
        background: linear-gradient(
          to bottom,
          ${lighten(0.1, primary)},
          ${primary}
        );
        box-shadow: 0 0 5px ${transparentize(0.25, primary)};
      `}
  }

  &::after {
    ${({ secondary }) =>
      css`
        background: linear-gradient(
          to bottom,
          ${lighten(0.1, secondary)},
          ${secondary}
        );
        box-shadow: 0 0 5px ${transparentize(0.25, secondary)};
      `}
  }
`;

export const Paints = styled.div`
  margin-left: 0.5rem;

  min-width: 50%;
  height: 100%;

  padding: 0.25rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 2rem;
  grid-auto-rows: 2rem;
  gap: 0.25rem;
  overflow-x: auto;

  /* background: thistle; */
`;

type PaintProps = {
  paintColor: string;
};
export const Paint = styled.div<PaintProps>`
  border-radius: 50%;
  height: 2rem;
  width: 2rem;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  ${({ paintColor }) =>
    css`
      background: linear-gradient(
        to bottom,
        ${lighten(0.1, paintColor)},
        ${paintColor}
      );
    `}
`;
