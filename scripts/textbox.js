function addTextbox(e) {
  var textbox = document.getElementById('textboxExtension');

  if (textbox == null) {
    const element = document.body.firstChild;
    const newTextbox = document.createElement('div');
    newTextbox.id = 'textboxExtension';
    newTextbox.className = 'textboxExtension';
    newTextbox.style.left = `${e.clientX}px`;
    newTextbox.style.top = `${e.clientY}px`;
    // TODO: Refactor the output of the textbox
    newTextbox.innerHTML = `${
      e.target.id != '' ? `Id: ${e.target.id}<br>` : ''
    }Value: ${e.target.textContent.substr(0, 50)}`;

    document.body.insertBefore(newTextbox, element);
    overlay = document.getElementById('textboxExtension');
  }
}

function removeTextbox(e) {
  var overlay = document.getElementById('textboxExtension');

  if (overlay != null) {
    overlay.remove();
  }
}

function addTextboxListeners() {
  // document.body.addEventListener('mouseover', addTextbox);
  document.body.addEventListener('mousemove', addTextbox);
  document.body.addEventListener('mouseout', removeTextbox);
  document.body.addEventListener('click', removeTextboxListeners);
}

function removeTextboxListeners(e) {
  // document.body.removeEventListener('mouseover', addTextbox);
  document.body.removeEventListener('mousemove', addTextbox);
  document.body.removeEventListener('mouseout', removeTextbox);
  document.body.removeEventListener('click', removeTextboxListeners);
  removeTextbox(e);
}
