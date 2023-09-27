import React, { useEffect } from "react";
import axios from "axios";
const Debounce = () => {
  const [pin, setPin] = React.useState("");
  const pinAPI = "https://api.postalpincode.in/pincode/";

  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios
        .get(pinAPI + pin)
        .then((res) => console.log(res.data[0].PostOffice))
        .catch((err) => console.log(err));
    }, 2000);
    return () => {
      clearTimeout(debouncing);
    };
  }, [pin]);
  return (
    <div>
      <input
        onChange={(event) => setPin(event.target.value)}
        placeholder="Enter your pincode here"
      />
    </div>
  );
};

export default Debounce;
