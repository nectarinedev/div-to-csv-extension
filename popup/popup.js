async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

document.getElementById('selectButton').addEventListener('click', async () => {
  const tab = await getCurrentTab();

  const response = await chrome.tabs.sendMessage(tab.id, {
    type: 'selectElement',
  });

  console.log(response);
});
