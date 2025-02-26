import React, { useState, useEffect, useCallback } from 'react';
import { getResponsiveImage, getThumbnailImage } from '../config/cloudinaryConfig';
import { generateCacheKey, getCachedTransformation, cacheTransformation } from '../utils/imageCache';

/**
 * Detects the optimal image format supported by the browser
 * @returns {'avif' | 'webp' | 'jpg' | 'auto'} The best supported image format
 */
const getOptimalFormat = () => {
  if (typeof window === 'undefined') return 'auto';

  const canvas = document.createElement('canvas');
  const formats = {
    'image/avif': 'avif',
    'image/webp': 'webp',
    'image/jpeg': 'jpg'
  };
  
  for (const [mimeType, format] of Object.entries(formats)) {
    if (canvas.toDataURL(mimeType).indexOf(mimeType) !== -1) {
      return format;
    }
  }
  
  return 'auto';
};

/**
 * OptimizedImage component with automatic format detection, progressive loading, and error recovery
 * @param {Object} props - Component props
 * @param {string} props.folder - Cloudinary folder containing the image
 * @param {string} props.imageName - Name of the image in the folder
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.width] - Desired width of the image
 * @param {number} [props.height] - Desired height of the image
 * @param {boolean} [props.priority=false] - Whether to load the image eagerly
 * @returns {JSX.Element} The optimized image component
 */
export function OptimizedImage({
  folder,
  imageName,
  alt,
  className,
  width,
  height,
  priority = false
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [optimalFormat, setOptimalFormat] = useState('auto');
  const [currentQuality, setCurrentQuality] = useState(85);

  useEffect(() => {
    setOptimalFormat(getOptimalFormat());
  }, []);

  /**
   * Handles image retry with progressive quality reduction
   * Reduces quality by 15% each retry, with a minimum of 40%
   */
  const retryWithLowerQuality = useCallback(() => {
    if (retryCount >= 2) {
      setError(true);
      return;
    }

    const newQuality = Math.max(currentQuality - 15, 40);
    setCurrentQuality(newQuality);
    setRetryCount(prev => prev + 1);
    setError(false);
    setLoaded(false);
  }, [retryCount, currentQuality]);

  // Generate cache keys for both thumbnail and main image
  const thumbnailOptions = { 
    width: width || 20, 
    height: height || 20,
    format: optimalFormat,
    quality: currentQuality
  };
  
  const mainImageOptions = { 
    maxWidth: width,
    quality: currentQuality,
    format: optimalFormat
  };

  const thumbnailCacheKey = generateCacheKey(folder, imageName, 'thumbnail', thumbnailOptions);
  const mainImageCacheKey = generateCacheKey(folder, imageName, 'responsive', mainImageOptions);

  // Try to get URLs from cache first, generate if not found
  let thumbnailUrl = getCachedTransformation(thumbnailCacheKey);
  let mainImageUrl = getCachedTransformation(mainImageCacheKey);

  if (!thumbnailUrl) {
    thumbnailUrl = getThumbnailImage(folder, imageName, thumbnailOptions);
    cacheTransformation(thumbnailCacheKey, thumbnailUrl);
  }

  if (!mainImageUrl) {
    mainImageUrl = getResponsiveImage(folder, imageName, mainImageOptions);
    cacheTransformation(mainImageCacheKey, mainImageUrl);
  }

  /**
   * Handles successful image load
   */
  const handleLoad = () => {
    setLoaded(true);
    setError(false);
  };

  /**
   * Handles image load errors and initiates retry process
   */
  const handleError = () => {
    if (retryCount < 2) {
      retryWithLowerQuality();
    } else {
      setError(true);
    }
  };

  return (
    <div className={`relative ${className || ''}`} style={{ width, height }}>
      {/* Thumbnail image (blurred) */}
      {!loaded && !error && (
        <img
          src={thumbnailUrl}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover filter blur-lg transition-opacity duration-300"
          width={width}
          height={height}
        />
      )}

      {/* Main image */}
      <img
        key={`${mainImageUrl}-${retryCount}`}
        src={mainImageUrl}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
} 