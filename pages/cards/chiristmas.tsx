import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useEffect } from 'react'

const Chistmas: React.FC = () => {
  useEffect(() => {
    const importLiff = async () => {
      const liff = await (await import('@line/liff')).default
      const hoge = await liff.init({
        liffId: '',
      })

      liff.sendMessages([
        {
          type: 'text',
          text: 'hige',
        },
      ])
    }
    importLiff()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ハムメディアクリスマスカード</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>hello</main>
    </div>
  )
}

export default Chistmas
