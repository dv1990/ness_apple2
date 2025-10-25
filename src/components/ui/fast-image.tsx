import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface FastImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  width?: number;
  height?: number;
  sizes?: string;
}

/**
 * High-performance image component with:
 * - Native lazy loading
 * - Automatic blur placeholder
 * - Proper dimensions to prevent layout shift
 * - Optimized loading strategy
 */
export const FastImage = ({
  src,
  alt,
  className,
  priority = false,
  aspectRatio,
  width,
  height,
  sizes = '100vw'
}: FastImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Preload critical images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(true);
  };

  if (isError) {
    return (
      <div
        className={cn(
          'bg-muted/20 flex items-center justify-center text-muted-foreground/60 text-sm',
          className
        )}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        Image unavailable
      </div>
    );
  }

  return (
    <div
      className={cn('relative overflow-hidden bg-muted/5', className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Blur placeholder - shown until image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-muted/5 animate-pulse" />
      )}

      {/* Optimized image with native lazy loading */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-700',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
};