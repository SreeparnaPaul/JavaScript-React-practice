import React from "react";

const Child = ({ name, changeName }) => {
  return (
    <div>
      <button onClick={() => changeName("sreeparna paul")}>{name}</button>
    </div>
  );
};

export default Child;
