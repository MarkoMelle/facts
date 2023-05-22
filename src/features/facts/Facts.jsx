import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Facts.module.css";
import { selectFacts, returnFact } from "./factsSlice";

export default function Facts() {
  const [inputValue, setInputValue] = useState("");
  const currenFacts = useSelector(selectFacts);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value < 6) {
      setInputValue(value);
      dispatch(returnFact(value));
    } else {
      setInputValue("");
      dispatch(returnFact(0));
    }
  };

  return (
    <div>
      <input
        type="number"
        min="1"
        max="5"
        value={inputValue}
        onChange={handleInput}
      />
      <ul>
        {currenFacts.map((fact) => (
          <li key={Date.now()}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
