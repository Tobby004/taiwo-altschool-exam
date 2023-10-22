import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCount } from "./hooks/useCount";
import "./styles.css";

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
  }

  function handleOnClick() {
    setValue(Number(newCount));
    setNewCount("");
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button className="button" onClick={decrement}>
        Decrement
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
      <input
        className="input-number"
        value={newCount}
        type="number"
        onChange={handleOnChange}
      />
      <button className="button" onClick={handleOnClick}>
        Set Count Value
      </button>
      <Link to="/" className="link-button">
        Home Page
      </Link>
    </div>
  );
}
