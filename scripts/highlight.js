let originalZIndex = 0;

function highlight(e) {
  e.target.style.backgroundColor = 'yellow';
  originalZIndex = e.target.style.zIndex;
  e.target.style.zIndex = '2147483647';
}

function unhighlight(e) {
  e.target.style.backgroundColor = '';
  e.target.style.zIndex = originalZIndex;
}

function addHighlightListeners() {
  document.body.addEventListener('mouseover', highlight);
  document.body.addEventListener('mouseout', unhighlight);
  document.body.addEventListener('click', removeHighlightListeners);
}

function removeHighlightListeners(e) {
  document.body.removeEventListener('mouseover', highlight);
  document.body.removeEventListener('mouseout', unhighlight);
  document.body.removeEventListener('click', removeHighlightListeners);
  unhighlight(e);
}
