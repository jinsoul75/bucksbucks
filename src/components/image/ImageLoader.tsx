interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageLoader({ src, alt, className }: ImageLoaderProps) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}
