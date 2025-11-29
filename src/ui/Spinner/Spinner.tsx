import styles from './Spinner.module.scss'

interface SpinnerProps {
  size: string
}

function Spinner({ size }: SpinnerProps) {
  const classNames =
    size === 'mini' ? `${styles.spinner} ${styles.mini}` : styles.spinner
  return <div className={classNames}></div>
}

export default Spinner
