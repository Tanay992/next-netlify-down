import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/STA-logo.png" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
