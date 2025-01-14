import { Suspense } from 'react';
import ImageSkeleton from './ImageSkeleton';
import ImageLoader from './ImageLoader';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ src, alt, className }: ImageProps) {
  return (
    <Suspense fallback={<ImageSkeleton />}>
      <ImageLoader src={src} alt={alt} className={className} />
    </Suspense>
  );
}
