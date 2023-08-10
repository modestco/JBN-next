"use client";
import { useState } from "react";
import NavBar from "./navbar";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBar />
    </>
  );
};

export default Navigation;