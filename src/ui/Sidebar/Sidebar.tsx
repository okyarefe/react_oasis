import { Link } from '@tanstack/react-router'
import styles from './Sidebar.module.scss'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/cabins', label: 'Cabins' },
]
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src="../../../public/logo.png" className={styles.logo}></img>
      </div>
      <nav className={styles.nav}>
        {navItems.map((navItem) => (
          <Link
            key={navItem.to}
            to={navItem.to}
            className={styles.link}
            activeProps={{
              className: styles.active,
            }}
          >
            {navItem.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
