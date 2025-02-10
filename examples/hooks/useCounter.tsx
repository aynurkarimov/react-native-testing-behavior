import { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  return {
    counter,
    increment: () => {
      setCounter((v) => v + 1);
    },
    decrement: () => {
      setCounter((v) => v - 1);
    },
  };
}
