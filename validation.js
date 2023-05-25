import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    username: "",
    emailid: "",
    password: "",
    conformpassword: "",
  });

  const { username, email, password, conformpassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.length <= 5) {
      alert("Username should be a minimum of 5 characters");
    } else if (password !== conformpassword) {
      alert("Password doesn't match");
    } else {
      console.log("Data submitted:", data);
    }
  };

  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="conformpassword"
            value={conformpassword}
            onChange={changeHandler}
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
