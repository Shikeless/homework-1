import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  const decrement = () => {
    setCount(count => count - 1);
  };

  return (
    <>
      <div className='count'>{count}</div>
      <button className='increment' onClick={increment}>Increment</button>
      <button className='decrement' onClick={decrement}>Decrement</button>
    </>
  );
};
