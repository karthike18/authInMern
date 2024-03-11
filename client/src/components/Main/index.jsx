// Main.jsx
import React from 'react';
import styles from "./styles.module.css";
import Home from './home'; // Assuming the file name is Home.jsx

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>E-Mart</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <Home />
    </div>
  );
};

export default Main;
