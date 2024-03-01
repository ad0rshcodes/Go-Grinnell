import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Signup from './signup.js';

export default function Home() {
  return (
    <div>
      <Signup />
    </div>
  );
}