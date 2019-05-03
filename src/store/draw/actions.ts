type OnDrawAction = {
  type: 'DRAW';
  payload: { coords: number[]; color: string };
};

type ClearCanvasAction = {
  type: 'CLEAR_CANVAS';
};

export const draw = (coords: number[], color: string): OnDrawAction => ({
  type: 'DRAW',
  payload: { coords, color },
});

export const clearCanvas = (): ClearCanvasAction => ({ type: 'CLEAR_CANVAS' });

export type DrawAction = OnDrawAction | ClearCanvasAction;
