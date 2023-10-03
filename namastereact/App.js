{
  /* <div id="parent">
  <div id="child">
  <h1>I am h1</h1>
  <h2>I am h2</h2>
  </div>
   <div id="child2">
  <h1>I am h1</h1>
  <h2>I am h2</h2>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1!"),
    React.createElement("h2", {}, "I am h2!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1!"),
    React.createElement("h2", {}, "I am h2!"),
  ]),
]);
console.log(parent);
//Because of this complex structure JSX introduced
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
