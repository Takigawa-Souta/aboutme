import { Link, useLocation } from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation() {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li>
            <Link 
              to="/" 
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
