import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

// Redux
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleButtonClick = () => {
    const userData = { username: username, password: password };
    dispatch(login(userData));
    history.push("/homepage");
  };

  return (
    <div className="App">
      <div>login</div>
      <br />
      <form>
        <label>username : </label>
        <input
          type="text"
          onChange={handleOnChange}
          name="username"
          value={username}
        ></input>
        <br />
        <label>password : </label>
        <input
          type="password"
          onChange={handleOnChange}
          name="password"
          value={password}
        ></input>
      </form>

      <button onClick={handleButtonClick}>login</button>
    </div>
  );
}

export default Login;
