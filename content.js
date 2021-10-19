(() => {
  const root = document.documentElement, meta = document.createElement("meta");
  meta.name = "theme-color";
  document.head.appendChild(meta);
  setThemeColor();
  function setThemeColor(){
    const themeColor = window.getComputedStyle(root).getPropertyValue("--background-tertiary");
    if (meta.content != themeColor) meta.content = themeColor;
    window.setTimeout(setThemeColor,1000);
  }
})();