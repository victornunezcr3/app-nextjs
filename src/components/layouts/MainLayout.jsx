

import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Home.module.css'
import Navbar from '../Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const MainLayout= ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Victor Ml Nuñez</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
