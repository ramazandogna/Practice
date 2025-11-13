"use client";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

export default function Debounce() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce({ delay: 500, value: searchTerm });

  useEffect(() => {
    console.log("Debounced Value:", debouncedValue);
  }, [debouncedValue]);

  return (
    <main className="flex flex-col items-center justify-center fixed h-100vh w-100vw inset-0 gap-4">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="border border-gray-300 p-2 rounded-md w-64"
        value={searchTerm}
      />
      <p className="text-gray-600">Debounced Value: {debouncedValue}</p>
    </main>
  );
}
