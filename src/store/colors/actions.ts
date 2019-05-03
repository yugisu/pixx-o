type ChangeColorAction = {
  type: 'CHANGE_COLOR';
  payload: { [key in 'primary' | 'secondary']: string };
};

type AddColorAction = {
  type: 'ADD_COLOR';
  payload: string;
};

export const changeColor = (
  change: { [key in 'primary' | 'secondary']: string }
): ChangeColorAction => ({
  type: 'CHANGE_COLOR',
  payload: change,
});

export const addColor = (color: string): AddColorAction => ({
  type: 'ADD_COLOR',
  payload: color,
});

export type ColorAction = ChangeColorAction | AddColorAction;
