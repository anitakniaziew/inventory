import React from 'react';
import ShopList from './shopList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ShopList />
    </div>
  );
}
