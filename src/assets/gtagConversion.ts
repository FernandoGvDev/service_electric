// src/utils/gtagConversion.ts
export function gtagReportConversion(url: string) {
  const callback = () => {
    if (url) window.location.href = url;
  };

  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: "AW-17637361779/znIzCJeh-KkbEPOQk9pB", // substitui pelos códigos certos
      event_callback: callback,
    });
  } else {
    callback();
  }

  return false;
}
