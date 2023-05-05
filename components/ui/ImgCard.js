import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Box, ImageListItemBar } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function ImgCard({
  creditUrl,
  imgAlt = 'placeholder',
  imgSrc = './placeholder.jpg',
  shotBy,
  newLimit,
  isLast,
}) {
  const cardRef = useRef();

  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast]);

  return (
    <>
      <Box ref={cardRef}>
        <Link href={creditUrl} scroll={false}>
          <img src={imgSrc} alt={imgAlt} />
        </Link>
      </Box>
      <ImageListItemBar
        sx={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }}
        title={shotBy}
        position='top'
      />
    </>
  );
}
