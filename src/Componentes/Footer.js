import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mail-footer">
      <div className="float-right d-none d-sm-block">
        <b>Diana Isabel Barón Gómez</b>
      </div>
      <strong>
        Copyright 2024 <Link to={"#"}></Link>
      </strong>
      All rights reserved
    </footer>
  );
};

export default Footer;
