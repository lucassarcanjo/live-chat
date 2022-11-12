import { FormEvent, useEffect, useState } from "react";

import { useUserStore, useRandomName } from "~/hooks";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import Logo from "~/assets/logo.svg";
import "./Login.scss";

export const Login = () => {
  const [username, setUsername] = useState("");
  const { name: randomName } = useRandomName();
  const { login } = useUserStore();

  useEffect(() => {
    setUsername(randomName);
  }, [randomName]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(username);
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
            value={username}
            className="login__input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            type="submit"
            // variant="action"
            label="Let's chat!"
            className="login__button"
          />
        </form>
      </div>
    </div>
  );
};
