import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
//import Card from "https://framer.com/m/Card-TCkD.js@pgEcVYx4vXEgWAdidD8x"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Framer-Motion Basics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
 
        <motion.h1 className={styles.title}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .3,}}
        whileHover={{scale: 1.1}}
        >
          Framer-Motion Basics
        </motion.h1>
        <p className={styles.description}>
          Testing the Framer-Motion Library
        </p>

        {/* <Card /> */}
        
      </main>
    </div>
  )
}
