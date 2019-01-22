function pencilToolHandler(event) {
  if (event.target.className === 'tile') {
    event.target.style.backgroundColor = chooseColor(event);
  }
}

function enablePencilTool() {
  let canvas = document.getElementById('canvas');
  canvas.addEventListener('mousedown', (event1) => {
    pencilToolHandler(event1);
    canvas.addEventListener('mouseover', pencilToolHandler);
    canvas.addEventListener('mouseleave', () => {
      document.body.addEventListener('mouseup', () => {
        canvas.removeEventListener('mouseover', pencilToolHandler);
      });
    });
  });
  canvas.addEventListener('mouseup', (event1) => {
    canvas.removeEventListener('mouseover', pencilToolHandler);
  });
}

function disablePencilTool() {
  let canvas = document.getElementById('canvas');
  canvas.parentNode.replaceChild(canvas.cloneNode(true), canvas);
}
