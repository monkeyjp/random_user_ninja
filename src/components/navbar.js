import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = ({toggleMode}) => {

  return (
    <nav className={`navbar navbar-light border-bottom justify-content-center ${styles.navbarPadding}`} data-bs-theme="dark">
        <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className={`${styles.title}`} >Random User</h1>
        </Link>
        <input
          className={styles.darkModeToggleInput}
          type="checkbox"
          onClick={toggleMode}
          id="darkmode-toggle"
        />
        <label className={styles.darkModeToggle} htmlFor="darkmode-toggle">
          <i className={`fa-solid fa-sun ${styles.sun}`}></i>
          <i className={`fa-solid fa-moon ${styles.moon}`}></i>
        </label>
    </nav>
  );
};
