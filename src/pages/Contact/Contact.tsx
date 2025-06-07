import { useState } from 'react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import styles from './Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // ここで実際の送信処理を行う
    alert('メッセージが送信されました！')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      
      <div className={styles.content}>
        <Card title="お問い合わせ">
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>メッセージ</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
              />
            </div>
            
            <Button type="submit" size="large">
              送信
            </Button>
          </form>
        </Card>
        
        <Card title="連絡先情報">
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <strong>Email:</strong>
              <span>your.email@example.com</span>
            </div>
            <div className={styles.contactItem}>
              <strong>GitHub:</strong>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </div>
            <div className={styles.contactItem}>
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Contact
