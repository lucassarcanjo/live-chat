import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../components/button";
import Input from "../../components/input";
import useRandomName from "../../hooks/useRandomName";

import Logo from "../../assets/logo.svg";
import "./Login.scss";

const Login = ({ setUsername, setLogin }) => {
  const [input, setInput] = useState("");
  const [randomName] = useRandomName();

  useEffect(() => {
    setInput(randomName);
  }, [randomName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
    setLogin();
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__title">
          <img src={Logo} alt="Logo" />
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label" htmlFor="user-input">
            How would you like to be called?
          </label>
          <Input
            autoFocus
            type="text"
            id="user-input"
            value={input}
            className="login__input"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="action"
            label="Let's chat!"
            className="login__button"
          />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setLogin: PropTypes.func.isRequired,
};

export default Login;
