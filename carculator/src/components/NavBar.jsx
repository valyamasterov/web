import React from "react";
import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <img src="/images/logo.png" />
      <div>
        <NavBarLink>Get in touch</NavBarLink>
        <NavBarLink>About us</NavBarLink>
        <Button type="navbar-cta">Subscribe</Button>
      </div>
    </div>
  );
};

export default NavBar;
