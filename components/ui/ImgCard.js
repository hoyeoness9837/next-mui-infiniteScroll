import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';

export default function ImgCard({
  creditUrl,
  imgAlt,
  imgSrc,
  newLimit,
  isLast,
}) {
  const cardRef = useRef(); //  card를 새로 fecthing 하는 기준.
  const options = {
    threshold: 0.1,
  };
  // isLast가 변경될 때마다 IntersectionObserver를 생성하고, cardRef.current를 관찰 대상으로 설정하여, cardRef.current 요소가 화면에 나타날 때 newLimit() 함수를 호출하는 코드.
  useEffect(() => {
    if (!cardRef?.current) return; //보이는 카드가 더이상 없다면 true.
    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    }, options);
    observer.observe(cardRef.current);
  }, [isLast]);

  return (
    <>
      {/* 가장 바깥 컨테이너에 기준Ref부착. */}
      <Box ref={cardRef}>  
        <Link href={creditUrl} scroll={false}>
          <img src={imgSrc} alt={imgAlt} />
        </Link>
      </Box>
    </>
  );
}
