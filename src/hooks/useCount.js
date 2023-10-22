import { useState } from "react";

export function useCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return { count, increment, decrement, reset, setValue };
}
