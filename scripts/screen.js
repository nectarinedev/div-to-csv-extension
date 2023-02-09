function darkenScreen() {
  var overlay = document.getElementById('selectElementOverlayExtension');

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

function removeScreen() {
  var overlay = document.getElementById('selectElementOverlayExtension');

  if (overlay != null) {
    overlay.remove();
  }
}

function addScreenListeners() {
  darkenScreen();
  document.body.addEventListener('click', removeScreenListeners);
}

function removeScreenListeners() {
  removeScreen();
  document.body.removeEventListener('click', removeScreenListeners);
}
