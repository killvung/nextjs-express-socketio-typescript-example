import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSocket from '../hooks/useSocket.js';
import {useState} from 'react';

export default function Home() {
  const [date, setDate] = useState();

  const socket = useSocket('FromAPI', date => {
    setDate(date)
  })

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {date}
      </main>
    </div>
  )
}
