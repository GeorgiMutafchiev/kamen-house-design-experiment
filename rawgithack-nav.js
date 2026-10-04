(() => {
  const base =
    "/GeorgiMutafchiev/kamen-house-design-experiment/codex-preview-86de868";

  function directFileUrl(value) {
    const url = new URL(value, window.location.origin);
    if (url.pathname === `${base}/` || url.pathname.endsWith("/")) {
      url.pathname += "index.html";
    }
    return url.href;
  }

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      const anchor = target instanceof Element ? target.closest("a") : null;
      if (!anchor || anchor.getAttribute("href")?.startsWith("#")) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin || !url.pathname.startsWith(`${base}/`)) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.assign(directFileUrl(anchor.href));
    },
    true,
  );
})();
