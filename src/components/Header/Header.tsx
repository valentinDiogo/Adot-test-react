import React, { useState } from "react";
import Modal from "../Modal/Modal";

import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="title">Destinations</h1>
      <button className="button" onClick={() => setIsOpen(true)}>
        <span className="plus">+</span> AJOUTER
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
