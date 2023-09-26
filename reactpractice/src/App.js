import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    let mappedArray = users.map((user) => user.id * 2);
    console.log(mappedArray);
  };
  const filtered = () => {
    let filteredData = users.filter((user) => {
      return user.name.toLowerCase().includes("a");
    });
    console.log(filteredData);
  };
  return (
    <div className="App">
      <div className="container">
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
      </div>
    </div>
  );
}

export default App;
