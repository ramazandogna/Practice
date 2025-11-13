"use client";

import { useEffect, useState } from "react";

/**
 * 
 * @params delay, value
 * @returns ,he debounced value after the specified delay
 */
export default function useDebounce({
  delay,
  value,
}: {
  delay: number;
  value: string;
}) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}
