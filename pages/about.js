import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - My Clothing Store</title>
        <meta name="description" content="The story behind My Clothing Store!" />
        <meta property="og:title" content="About - My Clothing Store" />
        <meta property="og:description" content="The story behind My Clothing Store!" />
        <meta property="og:url" content="https://myclothingstore.com/about" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          About My Clothing Store
        </h1>
      </main>
    </div>
  )
}