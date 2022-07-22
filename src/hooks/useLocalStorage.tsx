import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Destination } from "../context/DestinationsContext";

export default function useLocalStorage(
  key: string,
  initialValue: null[]
): [Destination[], Dispatch<SetStateAction<Destination[]>>] {
  const data: string | null = localStorage.getItem(key);
  const jsonData = typeof data === "string" ? JSON.parse(data) : null;

  const [value, setValue] = useState<Destination[]>(jsonData || initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
