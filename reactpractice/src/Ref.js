import React from "react";

const Ref = () => {
  let name = React.createRef();
  let age = React.createRef();
  const getName = (event) => {
    console.log(event.target.value);
  };
  const getAge = (event) => {
    console.log(event.target.value);
  };
  const submit = () => {
    console.log(name.current.value);
    console.log(age.current.value);
  };
  let data = `<b style="font-size:25px;color:blue">This is my home</b>`;
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
      {/* Uncontrolled inputs */}
      {/* To write an uncontrolled component, instead of writing an event handler for every 
      state update, you can use a ref to get form values from the DOM. */}
      <input placeholder="name" ref={name} />
      <input placeholder="age" ref={age} />
      {/* Controlled inputs */}
      <input placeholder="name" onChange={getName} />
      <input placeholder="age" onChange={getAge} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Ref;
