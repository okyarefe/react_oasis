import { useState } from 'react'
import styles from './Header.module.scss'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>I'm header</header>
    </>
  )
}
