document.getElementById('site').oncontextmenu = () => {
  return false;
};

bodyOptimize(document.body.clientHeight, document.body.clientWidth);
function bodyOptimize(height, width) {
  let body = document.body;
  if (height >= width) {
    body.style.padding = '1%';
  }
}
