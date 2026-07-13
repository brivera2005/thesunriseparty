"use client";

import { useEffect } from "react";

/**
 * Registers a network-first SW and aggressively retires stale cache-first
 * workers that were freezing phones on pre-Pass-35 HTML/CSS.
 */
export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    let cancelled = false;

    async function refreshWorkers() {
      try {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (const reg of regs) {
          // Force update check on every visit so phones leave sunrise-v1.
          await reg.update().catch(() => undefined);
        }

        const registration = await navigator.serviceWorker.register("/sw.js", {
          updateViaCache: "none",
        });

        if (cancelled) return;

        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          if (!worker) return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              // New SW ready — tell it to take over immediately.
              worker.postMessage?.({ type: "SKIP_WAITING" });
            }
          });
        });

        // If a controller exists from an old cache-first SW, wait for the
        // controllerchange after claim() then soft-reload once.
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.addEventListener(
            "controllerchange",
            () => {
              if (cancelled) return;
              const key = "sunrise-sw-reload-v37";
              if (sessionStorage.getItem(key)) return;
              sessionStorage.setItem(key, "1");
              window.location.reload();
            },
            { once: true }
          );
        }
      } catch {
        /* offline install is best-effort */
      }
    }

    void refreshWorkers();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
