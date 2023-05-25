import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const { username, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="username"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="password"
          />
          <br />
          <input type="submit" name="submit" />
          <br />
        </form>
      </center>
    </div>
  );
};

export default App;
