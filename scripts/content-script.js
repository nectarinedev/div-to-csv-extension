function selectElement() {
  var overlay = document.getElementById('selectElementOverlayExtension');

  // TODO: Put into another function is used again elsewhere
  // Add overlay if it doesn't exist
  if (overlay == null) {
    const element = document.body.firstChild;
    const newOverlay = document.createElement('div');
    newOverlay.id = 'selectElementOverlayExtension';

    // Darken screen
    newOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    newOverlay.style.width = `${window.innerWidth}px`;
    newOverlay.style.height = `${window.innerHeight}px`;
    newOverlay.style.zIndex = '9999999';
    newOverlay.style.display = 'fixed';
    newOverlay.style.position = 'fixed';
    newOverlay.style.pointerEvents = 'none';
    newOverlay.style.top = '0';
    newOverlay.style.left = '0';

    document.body.insertBefore(newOverlay, element);
    overlay = document.getElementById('selectElementOverlayExtension');
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.type) {
    case 'createOverlay':
      selectElement();
      sendResponse({ value: 'Success' });
    default:
      break;
  }
});
