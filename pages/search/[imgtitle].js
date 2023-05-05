import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ImgCard from '../../components/ui/ImgCard';
import { ImageList, ImageListItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../../components/layouts/layout.module.css';

export default function ImgSearch() {
  const matches = useMediaQuery('(min-width:768px)');
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async (imgtitle) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?query=${imgtitle}&page=${page}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH}`,
          },
        }
      );
      const { results } = await response.json();
      setImages((prev) => [...prev, ...results]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { imgtitle } = router.query;
      fetchImages(imgtitle);
    }
  }, [page, router]);

  return (
    <section className={styles.section_container}>
      <section className={styles.section}>
        <ImageList variant='masonry' cols={matches ? 3 : 1} gap={8}>
          {images.map((image, index) => (
            <ImageListItem key={image.id}>
              <ImgCard
                imgSrc={image.urls.regular}
                imgAlt={image.alt_description}
                shotBy={image.user.name}
                creditUrl={image.links.html}
                isLast={index === images.length - 1}
                newLimit={() => setPage(page + 1)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </section>
  );
}
