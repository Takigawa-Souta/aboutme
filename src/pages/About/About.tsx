import Card from '../../components/ui/Card'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      
      <div className={styles.grid}>
        <Card title="プロフィール">
          <p>
            私は情熱的なWeb開発者で、モダンなテクノロジーを使用して
            ユーザーフレンドリーなアプリケーションを構築することに
            興味を持っています。
          </p>
        </Card>
        
        <Card title="スキル">
          <ul className={styles.skillList}>
            <li>React & TypeScript</li>
            <li>Vite</li>
            <li>CSS Modules</li>
            <li>Git & GitHub</li>
            <li>レスポンシブデザイン</li>
          </ul>
        </Card>
        
        <Card title="経験">
          <p>
            フロントエンド開発に取り組んでおり、特にReactエコシステムと
            TypeScriptを使用したプロジェクトに力を入れています。
          </p>
        </Card>
        
        <Card title="趣味">
          <p>
            新しい技術の学習、オープンソースプロジェクトへの貢献、
            そして読書を楽しんでいます。
          </p>
        </Card>
      </div>
    </div>
  )
}

export default About
