"use client";

import { useState, useEffect } from "react";

const cache: Record<string, string> = {};

export function useGCSImage(imageKey: string): string | null {
  const [url, setUrl] = useState<string | null>(cache[imageKey] ?? null);

  useEffect(() => {
    if (!imageKey) return;
    if (cache[imageKey]) {
      setUrl(cache[imageKey]);
      return;
    }

    fetch(`/api/media?key=${encodeURIComponent(imageKey)}`)
      .then((r) => r.json())
      .then((data: { url?: string }) => {
        if (data.url) {
          cache[imageKey] = data.url;
          setUrl(data.url);
        }
      })
      .catch((err) => console.error("[useGCSImage] fetch failed:", err));
  }, [imageKey]);

  return url;
}
