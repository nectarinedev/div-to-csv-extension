function sendData(e) {
  // Identifier for whether the element has a specific id or css
  // we can look up later on the page
  // TODO: Look at a way of optimizing at this seems to be case by case
  let selector = 'None';
  let selectorValue = 'None';
  if (e.target.id.length !== 0) {
    selector = 'Id';
    selectorValue = e.target.id;
  } else if (e.target['data-testid'] !== undefined) {
    selector = 'TestId';
    selectorValue = e.target['data-testid'];
  } else if (e.target.className !== 0) {
    selector = 'Class';
    selectorValue = e.target.className;
  }

  chrome.runtime.sendMessage({
    type: 'addData',
    url: e.target.baseURI,
    selector: selector,
    selectorValue: selectorValue,
    value: e.target.textContent,
  });
}

function addDataListeners() {
  document.body.addEventListener('click', sendData);
  document.body.addEventListener('click', removeDataListeners);
}

function removeDataListeners() {
  document.body.removeEventListener('click', sendData);
  document.body.removeEventListener('click', removeDataListeners);
}
