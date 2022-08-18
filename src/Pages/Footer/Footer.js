import React from "react";
import foot from "../../Edvora.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid footer-box">
      <div>
        <img style={{ height: "40px" }} src={foot} alt="" />
      </div>
      <div className="footer-items">
        <h5>Edvora</h5>
        <h6>All Rights Reserved</h6>
        <p>
          <small>Copyright &copy; {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
