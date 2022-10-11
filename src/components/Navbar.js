import React from 'react';
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';

// Navbar component
const Navbar = () => {
  return (
    <div className={styles.NavBar}>
        <Link className={styles.title} to='/'> Contact Manager App</Link>
    </div>
  )
}

export default Navbar