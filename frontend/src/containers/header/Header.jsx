import React from "react";

import Button from "../../components/button";

import "./Header.scss";

const Header = () => (
  <header className="chat__header">
    <h2 className="chat__title">Live Chat</h2>
    <Button label="Messages" type="button" className="chat__button" />
    <Button
      label="Participants"
      type="button"
      className="chat__button"
      variant="secondary"
    />
  </header>
);

export default Header;
