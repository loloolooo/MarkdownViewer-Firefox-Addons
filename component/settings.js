document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get().then(
    result => {
      document.querySelector('#fontSize').value =
        typeof result.fontSize === "undefined" ? "16" : result.fontSize;
        typeof result.contentFontFamily === "undefined" ? "'Microsoft Yahei', Helvetica, Arial, sans-serif" : result.contentFontFamily;
        typeof result.codeFontFamily === "undefined" ? "'Menlo', 'Liberation Mono', 'Consolas', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Courier New', 'andale mono', 'lucida console', monospace" : result.codeFontFamily;
    },
    error => console.log(`Error: ${error}`)
  );
});

document.querySelector("#save").addEventListener("click", e => {
  e.preventDefault();
  browser.storage.local.set({
    fontSize: document.querySelector('#fontSize').value,
    contentFontFamily: document.querySelector('#contentFontFamily').value,
    codeFontFamily: document.querySelector('#codeFontFamily').value
  });
});