import styled, { css } from 'styled-components';

export const Tile = styled.div<{ size?: number; painted?: string }>`
  ${({ size = 25 }) => css`
    height: ${size}px;
    width: ${size}px;
  `}

  background: ${({ painted = 'rgba(255, 255, 255, 0.2)' }) => painted};
`;
