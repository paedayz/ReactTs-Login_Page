import React, { useState } from "react";
import "../App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  return (
    <div className="App">
      <div>login</div>
      <br />
      <form>
        <label>username : </label>
        <input
          onChange={handleOnChange}
          name="username"
          value={username}
        ></input>
        <br />
        <label>password : </label>
        <input
          onChange={handleOnChange}
          name="password"
          value={password}
        ></input>
      </form>

      <button>login</button>
    </div>
  );
}

export default Login;
