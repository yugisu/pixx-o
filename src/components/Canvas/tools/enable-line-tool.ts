export type ToolHandler = (ev: MouseEvent) => any;

export const enableLineTool = (toolHandler: ToolHandler) => (
  canvasElem: HTMLElement
) => {
  canvasElem.addEventListener('mousedown', (event1) => {
    toolHandler(event1);
    canvasElem.addEventListener('mouseover', toolHandler);
    canvasElem.addEventListener('mouseleave', () => {
      const onMouseUpOffLimits = () => {
        canvasElem.removeEventListener('mouseover', toolHandler);
        window.removeEventListener('mouseup', onMouseUpOffLimits);
      };
      window.addEventListener('mouseup', onMouseUpOffLimits);
    });
  });
  canvasElem.addEventListener('mouseup', () => {
    canvasElem.removeEventListener('mouseover', toolHandler);
  });
};
