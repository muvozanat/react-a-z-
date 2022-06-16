import React, { useState } from "react";

const Counter = () => {
  const [like, setLike] = useState(0);
  let typings = {
    increment: "increment",
    decrement: "decrement",
  };
  return (
    <>
      <h1>{like}</h1>
      <button
        onClick={() => {
          setLike((i) => {
            return (i += 1);
          });
        }}
      >
        {typings.increment}
      </button>
      <button
        onClick={() => {
          setLike((i) => {
            return (i -= 1);
          });
        }}
      >
        {typings.decrement}
      </button>
    </>
  );
};

export default Counter;
