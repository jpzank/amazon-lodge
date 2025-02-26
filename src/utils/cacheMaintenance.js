import { cleanupExpiredEntries, getCacheStats } from './imageCache';

const MAINTENANCE_INTERVAL = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
const MAX_CACHE_SIZE = 50 * 1024 * 1024; // 50MB in bytes

let maintenanceStats = {
  lastRun: 0,
  cacheSize: 0,
  entriesCount: 0,
  storageUsage: 0
};

// Calculate the size of the cache in localStorage
function calculateCacheSize() {
  try {
    const cacheStr = localStorage.getItem('cloudinary_transformation_cache') || '';
    return new Blob([cacheStr]).size;
  } catch (error) {
    console.warn('Failed to calculate cache size:', error);
    return 0;
  }
}

// Calculate total localStorage usage
function calculateStorageUsage() {
  try {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key) || '';
        total += new Blob([key, value]).size;
      }
    }
    return total;
  } catch (error) {
    console.warn('Failed to calculate storage usage:', error);
    return 0;
  }
}

// Run maintenance tasks
function runMaintenance() {
  try {
    // Clean up expired entries
    cleanupExpiredEntries();

    // Update maintenance stats
    const { size } = getCacheStats();
    maintenanceStats = {
      lastRun: Date.now(),
      cacheSize: calculateCacheSize(),
      entriesCount: size,
      storageUsage: calculateStorageUsage()
    };

    // If cache is too large, clear oldest entries
    if (maintenanceStats.cacheSize > MAX_CACHE_SIZE) {
      console.warn('Cache size exceeds limit, clearing cache...');
      localStorage.removeItem('cloudinary_transformation_cache');
    }

    console.log('Cache Maintenance Stats:', {
      ...maintenanceStats,
      cacheSize: `${(maintenanceStats.cacheSize / 1024 / 1024).toFixed(2)}MB`,
      storageUsage: `${(maintenanceStats.storageUsage / 1024 / 1024).toFixed(2)}MB`
    });
  } catch (error) {
    console.error('Cache maintenance failed:', error);
  }
}

// Start periodic maintenance
export function startCacheMaintenance() {
  // Run initial maintenance
  runMaintenance();

  // Set up periodic maintenance
  setInterval(runMaintenance, MAINTENANCE_INTERVAL);
}

// Get current maintenance stats
export function getMaintenanceStats() {
  return { ...maintenanceStats };
}

// Force immediate maintenance run
export function forceMaintenance() {
  runMaintenance();
} 