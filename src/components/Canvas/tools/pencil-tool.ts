import { useRef, useEffect } from 'react';
import { ToolHandler, enableLineTool } from './enable-line-tool';

const pencilToolHandler = (
  draw: (coords: number[], color: string) => void
): ToolHandler => (e) => {
  const target = e.target as HTMLElement;

  if (target && target.classList.contains('tile')) {
    draw(
      (target.getAttribute('data-coords') || '0-0')
        .split('-')
        .map((val: string) => +val),
      'rgb(255, 171, 0)'
    );
  }
};

export const usePencilTool = (
  draw: (coords: number[], color: string) => void
) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    canvasRef.current &&
      enableLineTool(pencilToolHandler(draw))(canvasRef.current);
  }, [canvasRef.current]);

  return canvasRef;
};
