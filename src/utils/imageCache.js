// Cache configuration
const CACHE_KEY = 'cloudinary_transformation_cache';
const CACHE_VERSION = '1.0';
const MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

// Cache structure to store transformed URLs
const transformationCache = new Map();

// Initialize cache from localStorage
function initializeCache() {
  try {
    const storedCache = localStorage.getItem(CACHE_KEY);
    if (storedCache) {
      const cacheData = JSON.parse(storedCache);
      
      // Clear cache if version mismatch
      if (cacheData.version !== CACHE_VERSION) {
        localStorage.removeItem(CACHE_KEY);
        return;
      }

      // Load valid entries into memory
      const now = Date.now();
      Object.entries(cacheData.entries).forEach(([key, entry]) => {
        if (now - entry.timestamp <= MAX_CACHE_AGE) {
          transformationCache.set(key, entry.url);
        }
      });

      // Clean up expired entries
      persistCache();
    }
  } catch (error) {
    console.warn('Failed to initialize image cache:', error);
    localStorage.removeItem(CACHE_KEY);
  }
}

// Persist cache to localStorage
function persistCache() {
  try {
    const now = Date.now();
    const entries = {};
    
    transformationCache.forEach((url, key) => {
      entries[key] = {
        url,
        timestamp: now
      };
    });

    const cacheData = {
      version: CACHE_VERSION,
      entries
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.warn('Failed to persist image cache:', error);
  }
}

// Generate a unique cache key based on transformation parameters
export function generateCacheKey(folder, imageName, transformationType, options) {
  const sortedOptions = Object.entries(options)
    .filter(([_, value]) => value !== undefined)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}:${value}`)
    .join(',');

  return `${folder}:${String(imageName)}:${transformationType}:${sortedOptions}`;
}

// Store a transformed URL in the cache
export function cacheTransformation(cacheKey, url) {
  transformationCache.set(cacheKey, url);
  persistCache();
}

// Get a cached transformed URL
export function getCachedTransformation(cacheKey) {
  return transformationCache.get(cacheKey);
}

// Clear the entire cache
export function clearCache() {
  transformationCache.clear();
  localStorage.removeItem(CACHE_KEY);
}

// Get cache statistics
export function getCacheStats() {
  return {
    size: transformationCache.size,
    keys: Array.from(transformationCache.keys())
  };
}

// Clean up expired entries
export function cleanupExpiredEntries() {
  const now = Date.now();
  let hasExpired = false;

  transformationCache.forEach((_, key) => {
    const storedCache = localStorage.getItem(CACHE_KEY);
    if (storedCache) {
      const cacheData = JSON.parse(storedCache);
      const entry = cacheData.entries[key];
      
      if (entry && now - entry.timestamp > MAX_CACHE_AGE) {
        transformationCache.delete(key);
        hasExpired = true;
      }
    }
  });

  if (hasExpired) {
    persistCache();
  }
}

// Preload critical images
export function preloadCriticalImages(criticalPaths) {
  if (!Array.isArray(criticalPaths)) return;

  criticalPaths.forEach(({ folder, imageName }) => {
    if (!folder || !imageName) return;

    const options = { 
      maxWidth: typeof window !== 'undefined' ? window.innerWidth : 1920,
      quality: 85 
    };
    
    const cacheKey = generateCacheKey(folder, imageName, 'responsive', options);
    
    if (!getCachedTransformation(cacheKey)) {
      // Create a new image and preload it
      const img = new Image();
      img.onload = () => {
        cacheTransformation(cacheKey, img.src);
      };
      img.src = `${folder}/${imageName}`;
    }
  });
}

// Initialize cache when module loads
initializeCache(); 