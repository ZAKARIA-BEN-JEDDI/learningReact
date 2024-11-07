import React from 'react'
import styles from './mesStyles.module.css'
export default function StyleModule() {
  return (
    <div>
      <h1 className={styles.monStyle}>Bonjour a tous !</h1>
      <p className={styles.parastyle}>Soez les bienvenues.</p>
    </div>
  )
}
