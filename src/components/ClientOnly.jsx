"use client";
import {
  Fragment,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";

export function ClientOnly({ children, fallback, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const comp = fallback ?? null;

  return <Fragment {...delegated}>{!hasMounted ? comp : children}</Fragment>;
}
