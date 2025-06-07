import { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  title?: string
  className?: string
}

function Card({ children, title, className = '' }: CardProps) {
  const cardClasses = [styles.card, className].filter(Boolean).join(' ')

  return (
    <div className={cardClasses}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Card
