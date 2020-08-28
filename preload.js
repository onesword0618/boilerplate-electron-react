window.addEventListener('DOMContentLoaded', () => {
  window.ipcRenderer = require('electron').ipcRenderer;
  window.remote = require('electron').remote;
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
