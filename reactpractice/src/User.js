import React, { useEffect } from "react";
import { getAllUsers } from "./helper/getAllUsers";
const User = () => {
  const [userData, setUserData] = React.useState("");
  const getUserHelper = async () => {
    let data = await getAllUsers();
    setUserData(data);
    console.log(data);
  };
  useEffect(() => {
    getUserHelper();
  }, []);
  return <div>{userData && userData?.map((user) => <p>{user?.name}</p>)}</div>;
};

export default User;
