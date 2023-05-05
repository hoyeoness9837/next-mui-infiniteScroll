import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ImgCard from '../../components/ui/ImgCard';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../../components/layouts/layout.module.css';

export default function ImgSearch() {
  const matches = useMediaQuery('(min-width:768px)');
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1); // page 1->2->3-> as you scroll..

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
        <ImageList
          variant='masonry'
          cols={matches ? 4 : 1}
          gap={matches ? 8 : 1}
        >
          {images.map((image, index) => (
            <ImageListItem>
              <ImgCard
                key={image.id}
                imgSrc={image.urls.regular}
                imgAlt={image.alt_description}
                creditUrl={image.links.html}
                isLast={index === images.length - 1} // page = 1 이므로 length - 1 이면 true
                newLimit={() => setPage(page + 1)}
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={image.user.name}
                position='top'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </section>
  );
}
