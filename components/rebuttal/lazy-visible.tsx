"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyVisibleProps {
  children: ReactNode;
  /** Placeholder height while off-screen */
  minHeight?: number;
  rootMargin?: string;
}

export function LazyVisible({
  children,
  minHeight = 72,
  rootMargin = "200px 0px",
}: LazyVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={!visible ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  );
}
