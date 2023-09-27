import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassCompo from "./ClassCompo";
import Parent from "./Parent";
import Ref from "./Ref";
import Debounce from "./Debounce";
function App() {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => setUsers(json));
  // }, []);

  // const mapData = () => {
  //   let mappedArray = users.map((user) => user.id * 2);
  //   console.log(mappedArray);
  // };
  // const filtered = () => {
  //   let filteredData = users.filter((user) => {
  //     return user.name.toLowerCase().includes("a");
  //   });
  //   console.log(filteredData);
  // };
  return (
    <div className="App">
      {/* <div className="container">
        <h1>Users</h1>
        <div className="card">
          {users?.map((user) => (
            <div className="card-inner" key={user.id}>
              <p>{user?.name}</p>
              <p>{user?.email}</p>
            </div>
          ))}
        </div>
        <button onClick={mapData}>See Mapped Arrays</button>
        <button onClick={filtered}>See Filtered Arrays</button>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ClassCompo />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/debounce" element={<Debounce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
