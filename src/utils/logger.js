/**
 * Logger utility to standardize logging across the application
 * Only logs in development environment by default
 */

const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

// Enable this flag if you want to track errors in production 
// (recommended to send to a service like Sentry)
const TRACK_ERRORS_IN_PROD = true;

/**
 * Format log messages consistently
 */
const formatMessage = (prefix, message) => {
  if (typeof message === 'string') {
    return `[${prefix}] ${message}`;
  }
  return message;
};

const logger = {
  error: (message, ...args) => {
    // Always log errors in development
    // In production, only log if tracking is enabled
    if (!isProduction || TRACK_ERRORS_IN_PROD) {
      console.error(formatMessage('ERROR', message), ...args);
      
      // Here you could add code to send errors to a monitoring service
      // if (isProduction) { sendToErrorMonitoring(message, args); }
    }
  },
  
  warn: (message, ...args) => {
    if (!isProduction && !isTest) {
      console.warn(formatMessage('WARN', message), ...args);
    }
  },
  
  info: (message, ...args) => {
    if (!isProduction && !isTest) {
      console.info(formatMessage('INFO', message), ...args);
    }
  },
  
  debug: (message, ...args) => {
    if (!isProduction && !isTest) {
      console.log(formatMessage('DEBUG', message), ...args);
    }
  },

  // Add this method for component lifecycle or render debugging
  // Very verbose, should be used sparingly
  trace: (message, ...args) => {
    if (process.env.REACT_APP_TRACE_LOGGING === 'true' && !isProduction) {
      console.log(formatMessage('TRACE', message), ...args);
    }
  }
};

export default logger; 