import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("sree");
  const changeName = (value) => {
    console.log(value);
    setName(value);
  };
  return (
    <div>
      <Child name={name} changeName={changeName} />
    </div>
  );
};
// we can pass values as props from parent to child and also pass function as props,otherhand, child can
// also pass props via function.
export default Parent;
