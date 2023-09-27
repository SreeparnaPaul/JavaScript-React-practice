import React, { useEffect } from "react";
import { getAllUsers } from "./helper/getAllUsers";

const User = () => {
  const [userData, setUserData] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [searched, setSearched] = React.useState([]);
  const getUserHelper = async () => {
    let data = await getAllUsers();
    setUserData(data);
    console.log(data);
  };
  const add = () => {
    //Dynamic import or code splitting
    import("./Math").then((math) => {
      let sum = math.add(5, 8);
      console.log(sum);
    });
  };
  useEffect(() => {
    getUserHelper();
    if (search) {
      setSearched(
        userData.filter((user) => {
          return Object.values(user)
            .join("")
            .toLowerCase()
            .includes(search.toLowerCase());
        })
      );
    } else {
      setSearched(userData);
    }
  }, [search]);
  return (
    <div className="App">
      <input
        className="search"
        placeholder="Search users...."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid-main">
        {search.length > 0
          ? searched &&
            searched?.map((search) => {
              return (
                <div className="grid-child">
                  <p>{search?.name}</p>
                  <p>{search?.username}</p>
                </div>
              );
            })
          : userData &&
            userData?.map((user) => {
              return (
                <div className="grid-child">
                  <p>{user?.name}</p>
                  <p>{user?.username}</p>
                </div>
              );
            })}
      </div>
      <button onClick={add}>ADD</button>
    </div>
  );
};

export default User;
