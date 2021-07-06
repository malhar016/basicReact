import React, { useEffect, useReducer, useState } from "react";

const CustomEmail = () => {
  const [error, setError] = useState("");
  const emailReducer = (action: any, state: any) => {
    return state;
  };
  const [email, setEmail] = useReducer(emailReducer, "");

  const validateEmail = () => {};

  return (
    <div>
      <input type="email" required></input>
      <p>error</p>
      <p>timer</p>
      <button type="submit" onClick={validateEmail}>
        PRESS ME!
      </button>
    </div>
  );
};

export default CustomEmail;
