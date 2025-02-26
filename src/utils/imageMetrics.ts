interface ImageMetrics {
  cacheHits: number;
  cacheMisses: number;
  transformationsByType: {
    thumbnail: number;
    responsive: number;
  };
  transformationsByFolder: Record<string, number>;
}

// Initialize metrics
const metrics: ImageMetrics = {
  cacheHits: 0,
  cacheMisses: 0,
  transformationsByType: {
    thumbnail: 0,
    responsive: 0
  },
  transformationsByFolder: {}
};

// Track cache hit
export function trackCacheHit(): void {
  metrics.cacheHits++;
}

// Track cache miss and new transformation
export function trackCacheMiss(
  folder: string,
  transformationType: 'thumbnail' | 'responsive'
): void {
  metrics.cacheMisses++;
  metrics.transformationsByType[transformationType]++;
  
  if (!metrics.transformationsByFolder[folder]) {
    metrics.transformationsByFolder[folder] = 0;
  }
  metrics.transformationsByFolder[folder]++;
}

// Get current metrics
export function getMetrics(): ImageMetrics {
  return { ...metrics };
}

// Calculate cache hit rate
export function getCacheHitRate(): number {
  const total = metrics.cacheHits + metrics.cacheMisses;
  return total === 0 ? 0 : (metrics.cacheHits / total) * 100;
}

// Reset metrics (useful for periodic monitoring)
export function resetMetrics(): void {
  metrics.cacheHits = 0;
  metrics.cacheMisses = 0;
  metrics.transformationsByType.thumbnail = 0;
  metrics.transformationsByType.responsive = 0;
  metrics.transformationsByFolder = {};
}

// Log current metrics
export function logMetrics(): void {
  console.log('Image Transformation Metrics:', {
    ...getMetrics(),
    cacheHitRate: `${getCacheHitRate().toFixed(2)}%`
  });
} 