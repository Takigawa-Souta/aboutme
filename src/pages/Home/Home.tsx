import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import styles from './Home.module.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>
      
      <h1 className={styles.title}>私のことについて</h1>
      
      <Card title="Interactive Counter">
        <div className={styles.counterSection}>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p className={styles.description}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </Card>
      
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Home
  