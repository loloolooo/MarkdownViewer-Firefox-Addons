document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get().then(
    (result) => {
      const fontSizeDefault = "16"; // NOTE: input number
      const contentFontFamilyDefault = "'Microsoft Yahei', Helvetica, Arial, sans-serif";
      const codeFontFamilyDefault = "'Roboto Mono', 'Menlo', 'Liberation Mono', 'Consolas', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Courier New', 'andale mono', 'lucida console', monospace"
      const contentWidthDefault = '680px;'
      document.querySelector('#fontSize').value = typeof result.fontSize === "undefined" ? fontSizeDefault : result.fontSize;
      document.querySelector('#contentFontFamily').value = typeof result.contentFontFamily === "undefined" ? contentFontFamilyDefault : result.contentFontFamily;
      document.querySelector('#codeFontFamily').value = typeof result.codeFontFamily === "undefined" ? codeFontFamilyDefault : result.codeFontFamily;
      document.querySelector('#contentWidth').value = typeof result.contentWidth === "undefined" ? contentWidthDefault : result.contentWidth;
    },
    error => console.log(`Error: ${error}`)
  );
});

document.querySelector("#save").addEventListener("click", e => {
  e.preventDefault();
  browser.storage.local.set({
    fontSize: document.querySelector('#fontSize').value,
    contentFontFamily: document.querySelector('#contentFontFamily').value,
    codeFontFamily: document.querySelector('#codeFontFamily').value,
    contentWidth: document.querySelector('#contentWidth').value
  });
});