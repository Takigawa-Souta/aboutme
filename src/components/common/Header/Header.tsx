import styles from './Header.module.css'

interface HeaderProps {
  title?: string
  subtitle?:string
}

function Header({ title = "瀧川 颯太",subtitle="スーパーITエンジニア専攻所属"}:
HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}
        </h2>
      </div>
    </header>
  )
}

export default Header
