import React from 'react';
import styles from '../styles/PageError.module.css'
// Pagerror component
const PageError = () => {
  return (
    <div className={styles.error}><span style={{fontWeight:'bolder'}}>The requested resource was not found</span> </div>
  )
}

export default PageError