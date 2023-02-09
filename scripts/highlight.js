function highlight(e) {
  e.target.style.backgroundColor = 'yellow';
}

function unhighlight(e) {
  e.target.style.backgroundColor = '';
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
