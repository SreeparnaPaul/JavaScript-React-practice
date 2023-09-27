import React, { useEffect } from "react";

const Question = () => {
  //Write a  function which takes an array of multiple functions and execute one by one ,
  // in left to right manner-by zomato

  const fnArray = [
    function fn(a, b) {
      return a + b;
    },
    function fn(a, b) {
      return a - b;
    },
    function fn(a, b) {
      return a * b;
    },
    function fn(a, b) {
      return a / b;
    },
  ];
  const mainFn = () => {
    let result = fnArray?.map((fn) => {
      return fn(7, 3);
    });
    console.log(result);
  };
  useEffect(() => {
    mainFn();
  }, []);
  return <div></div>;
};

export default Question;
