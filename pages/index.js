import { useRef } from 'react';
import { Button, Input } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../components/layouts/layout.module.css';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchInput = searchInputRef.current.value;
    router.push(`/search/${searchInput}`);
  };
  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit}>
        <Input
          label='Search Input'
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
