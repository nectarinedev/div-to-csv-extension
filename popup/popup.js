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
});

async function showAllData() {
  const allData = await chrome.storage.local.get(null);

  const parentElement = document.getElementById('data');

  const keys = Object.keys(allData);
  const tableOutput = keys
    .map((key) => {
      if (key === 'index') {
        return;
      }

      return `<tr> <td>${key}</td> <td>${allData[key]}</td> </tr>`;
    })
    .join(' ');

  parentElement.innerHTML = `
    <table border="1">
      <tbody>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
        ${tableOutput}
      </tbody>
    </table>
  `;
  parentElement.style.display = 'block';
  console.log(parentElement.style.display);
}

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  // for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
  //   console.log(
  //     `Storage key "${key}" in namespace "${namespace}" changed.`,
  //     `Old value was "${oldValue}", new value is "${newValue}".`
  //   );
  // }
  showAllData();
});

document.addEventListener('DOMContentLoaded', function () {
  showAllData();
});
