import Head from 'next/head';
import { useState, useRef } from 'react';
import { Button, InputBase } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../components/layouts/layout.module.css';
// import layout from '../components/layouts/layout';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the form from submitting
    const searchInput = searchInputRef.current.value;
    router.push(`/search/${searchInput}`);
  };
  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit}>
        <InputBase
          label='Search'
          name='search'
          inputRef={searchInputRef}
          placeholder='Search Your Image'
          required
        />
        <Button type='submit'>Search</Button>
      </form>
    </section>
  );
}
